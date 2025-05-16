# ☕ LeCafe - React Native Prototype

Prueba técnica
---

## 🎯 Descripción

LeCafe es una prueba técnica diseñada para replicar con máxima fidelidad el prototipo de Figma proporcionado. El objetivo es construir una aplicación móvil en React Native que reproduzca **colores**, **posiciones** y **animaciones** exactas en Android e iOS, con interacciones clickables según el prototipo (similar a Tinder).

* Prototipo en Figma: [Ver aquí](https://www.figma.com/proto/VvIhHkdGfLYjEkU5y7s5CJ/Mobile-Test-App?node-id=1240-213&t=2In4vS3XEw8E8v5b-0)
* No se conecta a ninguna API: contenido estático.

---

## 🚀 Requisitos Previos

- [Node.js](https://nodejs.org) (v18+)
- [Expo Go](https://expo.dev/client) instalado en tu dispositivo móvil
- Cuenta de [Expo](https://expo.dev/signup) (opcional pero recomendado)

---

## ⚡ Instalación y Ejecución

Estos pasos garantizan que uses la CLI local de Expo y el Development Client con los módulos nativos.

### 1. Clonar el repositorio

```bash
git clone https://github.com/malygod/lecafe-react-native.git
cd lecafe-react-native
```

### 2. Instalar dependencias

```bash
npm install
# o
# yarn install
```

### 3. Instalar el Dev Client (solo primera vez)

```bash
npx expo prebuild --clean
npx expo run:android   # para Android
eno npx expo run:ios   # para iOS
```

> Esto genera y compila la app nativa con todos los módulos (animaciones, navegación, etc.).

### 4. Iniciar Metro Bundler

```bash
npx expo start -c --tunnel
```

* Escanea el QR con **Expo Development Client** (no Expo Go).
* Alternativas: `--lan` o `--local` en vez de `--tunnel`.

o para instalar la app en un dispositivo android abrir este link: 
https://expo.dev/accounts/malygod/projects/lecafe-react-native/builds/76d3e00c-3c7f-43e3-b9f8-b2bef425647a
---

## 📘 Instrucciones de QA

* Verificar **pixel-perfect**: utiliza una app de overlay para comparar con Figma.
* Revisa animaciones en ambos sistemas: Android e iOS.
* Prueba flotantes y gestos de deslizamiento.

