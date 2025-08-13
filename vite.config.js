// 

// import tailwindcss from '@tailwindcss/vite'
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
//   optimizeDeps: {
//     esbuildOptions: {
//       define: {
//         global: 'globalThis'
//       },
//       plugins: [
//         NodeGlobalsPolyfillPlugin({
//           buffer: true,
//           process: true
//         }),
//         NodeModulesPolyfillPlugin()
//       ]
//     }
//   },
//   resolve: {
//     alias: {
//       buffer: 'buffer/', // ✅ ensure single Buffer instance
//       stream: 'stream-browserify',
//       crypto: 'crypto-browserify',
//       events: 'events/'
//     }
//   },
//   define: {
//     global: 'globalThis' // ✅ safer than "window"
//   }
// });


import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ['buffer'], // ✅ force correct pre-bundling
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  resolve: {
    alias: {
      buffer: 'buffer', // ✅ ensures named exports file is used
      stream: 'stream-browserify',
      crypto: 'crypto-browserify',
      events: 'events/'
    }
  },
  define: {
    global: 'globalThis' // ✅ works in browser & Node
  }
});
