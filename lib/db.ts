import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { db } from "./firebase"
import type { Product } from "@/types"

// Colección de productos
const productsCollection = collection(db, "productos")

// Obtener todos los productos (para administración)
export async function getAllProducts(): Promise<Product[]> {
  try {
    const productsSnapshot = await getDocs(productsCollection)

    return productsSnapshot.docs.map((doc) => {
      const data = doc.data()

      // Verificar si el campo visible existe en el documento original
      const hasVisibleField = Object.prototype.hasOwnProperty.call(data, "visible")

      return {
        id: doc.id,
        name: data.name || "",
        price: data.price !== undefined ? data.price : null, // Usar null en lugar de undefined
        description: Array.isArray(data.description) ? data.description : [],
        images: Array.isArray(data.images) ? data.images : [],
        categories: Array.isArray(data.categories) ? data.categories : [],
        videoUrl: data.videoUrl || "",
        pdfUrl: data.pdfUrl || "",
        brand: data.brand || { name: "", logo: "" },
        warranty: data.warranty || null,
        visible: hasVisibleField ? data.visible : undefined, // Preservar undefined si no existe
        needsMigration: !hasVisibleField, // Nuevo campo para indicar si necesita migración
      } as Product
    })
  } catch (error) {
    console.error("Error getting products:", error)
    throw error
  }
}

// Obtener todos los productos visibles (para el frontend)
export async function getVisibleProducts(): Promise<Product[]> {
  try {
    const q = query(productsCollection, where("visible", "!=", false))
    const productsSnapshot = await getDocs(q)

    return productsSnapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        id: doc.id,
        name: data.name || "",
        price: data.price !== undefined ? data.price : null,
        description: Array.isArray(data.description) ? data.description : [],
        images: Array.isArray(data.images) ? data.images : [],
        categories: Array.isArray(data.categories) ? data.categories : [],
        videoUrl: data.videoUrl || "",
        pdfUrl: data.pdfUrl || "",
        brand: data.brand || { name: "", logo: "" },
        warranty: data.warranty || null,
        visible: true,
      } as Product
    })
  } catch (error) {
    console.error("Error getting visible products:", error)
    throw error
  }
}

// Obtener un producto por ID
export async function getProductById(id: string): Promise<Product | null> {
  const docRef = doc(db, "productos", id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    return null
  }

  const data = docSnap.data()
  return {
    id: docSnap.id,
    name: data.name,
    description: Array.isArray(data.description) ? data.description : [],
    images: Array.isArray(data.images) ? data.images : [],
    categories: Array.isArray(data.categories) ? data.categories : [],
    videoUrl: data.videoUrl || "",
    pdfUrl: data.pdfUrl || "",
    price: data.price !== undefined ? data.price : null, // Usar null en lugar de undefined
    brand: data.brand || { name: "", logo: "" },
    warranty: data.warranty || null,
    visible: data.visible !== undefined ? data.visible : true, // Por defecto, los productos son visibles
  } as Product
}

// Obtener productos por categoría (solo visibles para el frontend)
export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const q = query(productsCollection, where("categories", "array-contains", categoryId), where("visible", "!=", false))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      name: data.name,
      description: Array.isArray(data.description) ? data.description : [],
      images: Array.isArray(data.images) ? data.images : [],
      categories: Array.isArray(data.categories) ? data.categories : [],
      videoUrl: data.videoUrl || "",
      pdfUrl: data.pdfUrl || "",
      price: data.price !== undefined ? data.price : null, // Usar null en lugar de undefined
      brand: data.brand || { name: "", logo: "" },
      warranty: data.warranty || null,
      visible: true,
    } as Product
  })
}

// Verificar si el usuario está autenticado
function checkAuth() {
  const auth = getAuth()
  const user = auth.currentUser

  if (!user) {
    throw new Error("Usuario no autenticado")
  }

  return user
}

// Agregar un nuevo producto
export async function addProduct(product: Omit<Product, "id">): Promise<string> {
  // Verificar autenticación
  checkAuth()

  // Asegurarse de que el producto sea visible por defecto si no se especifica
  const productWithVisibility = {
    ...product,
    visible: product.visible !== undefined ? product.visible : true,
  }

  const docRef = await addDoc(productsCollection, {
    ...productWithVisibility,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return docRef.id
}

// Actualizar un producto existente
export async function updateProduct(id: string, product: Partial<Product>): Promise<void> {
  // Verificar autenticación
  checkAuth()

  const docRef = doc(db, "productos", id)
  await updateDoc(docRef, {
    ...product,
    updatedAt: serverTimestamp(),
  })
}

// Cambiar la visibilidad de un producto
export async function toggleProductVisibility(id: string, visible: boolean): Promise<void> {
  // Verificar autenticación
  checkAuth()

  const docRef = doc(db, "productos", id)
  await updateDoc(docRef, {
    visible: visible,
    updatedAt: serverTimestamp(),
  })
}

// Eliminar un producto
export async function deleteProduct(id: string): Promise<void> {
  // Verificar autenticación
  checkAuth()

  const docRef = doc(db, "productos", id)
  await deleteDoc(docRef)
}

// Migrar todos los productos para añadir el campo visible
export async function migrateProductsVisibility(): Promise<number> {
  // Verificar autenticación
  checkAuth()

  try {
    // Obtener todos los productos
    const productsSnapshot = await getDocs(productsCollection)

    // Usar batch para actualizar múltiples documentos de manera eficiente
    const batch = writeBatch(db)
    let updatedCount = 0

    productsSnapshot.docs.forEach((doc) => {
      const data = doc.data()

      // Solo actualizar si el campo visible no existe
      if (data.visible === undefined) {
        batch.update(doc.ref, {
          visible: true,
          updatedAt: serverTimestamp(),
        })
        updatedCount++
      }
    })

    // Ejecutar el batch
    if (updatedCount > 0) {
      await batch.commit()
    }

    return updatedCount
  } catch (error) {
    console.error("Error migrating products visibility:", error)
    throw error
  }
}

