# 📌 NOTES — Task 2 (3D Model Viewer)

## 1. GLB Compression

* **Original File Size:** 2.8 MB
* **Compressed File Size (Draco):** 2.6 MB

### Explanation:

Draco compression primarily reduces **mesh geometry size**, but in this case, the model contains **high-resolution textures**, which are not compressed by Draco.
As a result, the overall file size reduction is minimal.

### Command Used:

```bash
npm install -g gltf-pipeline
npx gltf-pipeline -i public/model/model-compressed.glb -o public/model/model-draco.glb --draco.compressMeshes
```

---

## 2. Why Lazy Loading Three.js Matters

Three.js is a relatively large library (~500KB+). Loading it upfront can:

* Block the initial page rendering
* Increase initial load time
* Impact performance on slower networks

### Solution:

We used **dynamic import (lazy loading)** to load Three.js only when required.

### Benefits:

* Faster initial page load
* Reduced bundle size
* Better user experience
* Improved performance

---

## 3. Importance of dispose() in Long-Running Sessions

If `dispose()` is not used properly in a Three.js application:

### Issues:

* Memory leaks (unused geometries, materials, textures remain in memory)
* Increased GPU memory usage
* Performance degradation over time
* Potential browser crashes for heavy scenes

### Why it matters:

Three.js does not automatically clean up GPU resources.
Manual disposal is required to maintain performance and stability in long-running applications.

---

## ✅ Summary

* Implemented optimized model loading using Draco compression
* Used lazy loading to improve performance
* Demonstrated understanding of memory management in Three.js

---
