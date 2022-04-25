declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LottieAnimation: typeof import('lottie-web-vue')['LottieAnimation']
  }
}

export {}