import clsx from 'clsx'

export function Logo({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 107 36"
      className={clsx('text-slate-900 dark:text-white', className)}
      {...props}
    >
      <path
        d="M6 26C23.0346 26 40.0264 25.7359 57.0456 25.4722C64.5045 25.3567 71.9952 25.125 79.4558 25.125C83.2129 25.125 86.7964 25.2742 90.5527 25.0972C92.2186 25.0187 93.8624 25 95.5328 25C96.3277 25 97.0996 25.2613 97.8063 25.4167C98.8375 25.6435 99.9068 25.7628 101 25.875"
        stroke="#FDE8E8"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M21.06 23.94C21.06 25.68 20.3 27.23 18.78 28.59C17.26 29.95 15.62 30.63 13.86 30.63C11.32 30.63 9.44 29.64 8.22 27.66C7.24 26.04 6.75 23.87 6.75 21.15C6.75 18.39 7.34 15.89 8.52 13.65C9.94 10.91 11.9 9.54 14.4 9.54C15.64 9.54 16.72 9.83 17.64 10.41C18.66 11.07 19.29 11.97 19.53 13.11C19.73 14.05 19.83 14.5 19.83 14.46C19.83 17.1 19.23 18.42 18.03 18.42C17.67 18.42 17.34 18.3 17.04 18.06C16.74 17.82 16.59 17.52 16.59 17.16C16.59 16.96 16.69 16.67 16.89 16.29C17.11 15.91 17.22 15.61 17.22 15.39C17.22 14.25 17.08 13.47 16.8 13.05C16.44 12.47 15.73 12.18 14.67 12.18C13.59 12.18 12.59 12.85 11.67 14.19C10.91 15.31 10.41 16.48 10.17 17.7C9.93 19 9.81 20.2 9.81 21.3C9.81 23.18 9.96 24.54 10.26 25.38C10.74 26.74 11.71 27.63 13.17 28.05C13.61 28.17 13.97 28.23 14.25 28.23C14.97 28.23 15.73 27.93 16.53 27.33C17.23 26.77 17.77 26.14 18.15 25.44C18.37 25.02 18.5 24.49 18.54 23.85L18.42 23.76C17 23.76 15.9 23.93 15.12 24.27C14.88 24.39 14.64 24.52 14.4 24.66C14.08 24.8 13.83 24.87 13.65 24.87C13.15 24.87 12.76 24.66 12.48 24.24C12.2 23.82 12.06 23.35 12.06 22.83C12.06 22.39 12.29 22.03 12.75 21.75C13.05 21.59 13.99 21.4 15.57 21.18C17.01 21 18.02 20.91 18.6 20.91C20.24 20.91 21.06 21.92 21.06 23.94ZM39.1134 24.69C39.1134 25.65 38.6834 26.14 37.8234 26.16C37.9234 26.62 38.1434 27.24 38.4834 28.02C38.4634 28.46 38.2834 28.82 37.9434 29.1C37.6034 29.38 37.2034 29.52 36.7434 29.52C36.3834 29.52 35.9634 29.41 35.4834 29.19C35.2234 28.67 35.0934 28.05 35.0934 27.33C35.0934 27.15 35.1034 26.89 35.1234 26.55C35.1434 26.21 35.1534 25.96 35.1534 25.8C35.1534 25.94 34.8234 26.01 34.1634 26.01C33.0434 26.01 31.7134 26.06 30.1734 26.16C27.9734 26.28 26.7734 26.45 26.5734 26.67C26.3934 26.89 26.2734 27.96 26.2134 29.88C25.9534 30.26 25.6234 30.45 25.2234 30.45C24.8034 30.45 24.3734 30.28 23.9334 29.94C23.4934 29.58 23.2734 29.2 23.2734 28.8C23.2734 28.66 23.4534 28.1 23.8134 27.12C24.2134 25.7 24.8634 23.57 25.7634 20.73C28.4434 13.39 30.6734 9.72 32.4534 9.72C34.1934 9.72 35.5334 11.66 36.4734 15.54C36.8934 17.28 37.2834 19.95 37.6434 23.55C38.1634 23.67 38.4934 23.77 38.6334 23.85C38.9534 24.03 39.1134 24.31 39.1134 24.69ZM34.9134 23.55C34.0334 16.57 33.2434 13.08 32.5434 13.08C31.9834 13.08 31.0034 14.72 29.6034 18C28.6034 20.36 27.8134 22.41 27.2334 24.15C27.8734 24.01 28.8234 23.84 30.0834 23.64C31.2234 23.5 32.8334 23.47 34.9134 23.55ZM59.9606 10.59C59.9606 10.87 59.8706 11.1 59.6906 11.28C59.3906 11.62 59.2306 11.8 59.2106 11.82C59.0906 12.02 58.9706 12.54 58.8506 13.38C58.3506 17.46 58.1006 21.49 58.1006 25.47C58.1006 27.71 58.5006 28.97 59.3006 29.25V30.06C59.0606 30.56 58.6906 30.81 58.1906 30.81C57.1706 30.81 56.4006 29.92 55.8806 28.14C55.5006 26.88 55.3106 25.56 55.3106 24.18C55.3106 21.16 55.3906 18.64 55.5506 16.62C54.9506 18.96 54.3406 21.31 53.7206 23.67C52.6006 27.31 51.5206 29.13 50.4806 29.13C49.3006 29.13 48.2606 28.06 47.3606 25.92C46.5206 23.98 45.4906 20.72 44.2706 16.14C44.1506 17.5 44.0906 18.89 44.0906 20.31C44.0906 23.25 44.1706 25.38 44.3306 26.7C44.3506 26.94 44.4606 27.33 44.6606 27.87C44.8806 28.39 44.9906 28.8 44.9906 29.1C44.9906 29.76 44.4406 30.09 43.3406 30.09C42.0406 30.09 41.3906 28.34 41.3906 24.84C41.3906 23.42 41.4706 21.3 41.6306 18.48C41.7906 15.66 41.8706 13.55 41.8706 12.15C41.8706 11.99 41.7906 11.82 41.6306 11.64C41.4706 11.46 41.3906 11.29 41.3906 11.13C41.3906 10.01 42.3906 9.45 44.3906 9.45C44.8506 9.45 45.4006 9.74 46.0406 10.32C46.1006 10.94 46.2006 11.88 46.3406 13.14C46.5406 14.9 47.0106 17.23 47.7506 20.13C48.7306 23.87 49.5806 25.74 50.3006 25.74C50.4606 25.74 50.6706 25.43 50.9306 24.81C51.4306 23.61 51.9206 21.92 52.4006 19.74C52.7606 18 53.1206 16.26 53.4806 14.52C53.6406 13.7 53.9306 12.52 54.3506 10.98C54.7706 9.84 55.6506 9.27 56.9906 9.27C57.4706 9.27 58.0506 9.38 58.7306 9.6C59.5506 9.88 59.9606 10.21 59.9606 10.59ZM80.9372 10.59C80.9372 10.87 80.8472 11.1 80.6672 11.28C80.3672 11.62 80.2072 11.8 80.1872 11.82C80.0672 12.02 79.9472 12.54 79.8272 13.38C79.3272 17.46 79.0772 21.49 79.0772 25.47C79.0772 27.71 79.4772 28.97 80.2772 29.25V30.06C80.0372 30.56 79.6672 30.81 79.1672 30.81C78.1472 30.81 77.3772 29.92 76.8572 28.14C76.4772 26.88 76.2872 25.56 76.2872 24.18C76.2872 21.16 76.3672 18.64 76.5272 16.62C75.9272 18.96 75.3172 21.31 74.6972 23.67C73.5772 27.31 72.4972 29.13 71.4572 29.13C70.2772 29.13 69.2372 28.06 68.3372 25.92C67.4972 23.98 66.4672 20.72 65.2472 16.14C65.1272 17.5 65.0672 18.89 65.0672 20.31C65.0672 23.25 65.1472 25.38 65.3072 26.7C65.3272 26.94 65.4372 27.33 65.6372 27.87C65.8572 28.39 65.9672 28.8 65.9672 29.1C65.9672 29.76 65.4172 30.09 64.3172 30.09C63.0172 30.09 62.3672 28.34 62.3672 24.84C62.3672 23.42 62.4472 21.3 62.6072 18.48C62.7672 15.66 62.8472 13.55 62.8472 12.15C62.8472 11.99 62.7672 11.82 62.6072 11.64C62.4472 11.46 62.3672 11.29 62.3672 11.13C62.3672 10.01 63.3672 9.45 65.3672 9.45C65.8272 9.45 66.3772 9.74 67.0172 10.32C67.0772 10.94 67.1772 11.88 67.3172 13.14C67.5172 14.9 67.9872 17.23 68.7272 20.13C69.7072 23.87 70.5572 25.74 71.2772 25.74C71.4372 25.74 71.6472 25.43 71.9072 24.81C72.4072 23.61 72.8972 21.92 73.3772 19.74C73.7372 18 74.0972 16.26 74.4572 14.52C74.6172 13.7 74.9072 12.52 75.3272 10.98C75.7472 9.84 76.6272 9.27 77.9672 9.27C78.4472 9.27 79.0272 9.38 79.7072 9.6C80.5272 9.88 80.9372 10.21 80.9372 10.59ZM98.7853 24.69C98.7853 25.65 98.3553 26.14 97.4953 26.16C97.5953 26.62 97.8153 27.24 98.1553 28.02C98.1353 28.46 97.9553 28.82 97.6153 29.1C97.2753 29.38 96.8753 29.52 96.4153 29.52C96.0553 29.52 95.6353 29.41 95.1553 29.19C94.8953 28.67 94.7653 28.05 94.7653 27.33C94.7653 27.15 94.7753 26.89 94.7953 26.55C94.8153 26.21 94.8253 25.96 94.8253 25.8C94.8253 25.94 94.4953 26.01 93.8353 26.01C92.7153 26.01 91.3853 26.06 89.8453 26.16C87.6453 26.28 86.4453 26.45 86.2453 26.67C86.0653 26.89 85.9453 27.96 85.8853 29.88C85.6253 30.26 85.2953 30.45 84.8953 30.45C84.4753 30.45 84.0453 30.28 83.6053 29.94C83.1653 29.58 82.9453 29.2 82.9453 28.8C82.9453 28.66 83.1253 28.1 83.4853 27.12C83.8853 25.7 84.5353 23.57 85.4353 20.73C88.1153 13.39 90.3453 9.72 92.1253 9.72C93.8653 9.72 95.2053 11.66 96.1453 15.54C96.5653 17.28 96.9553 19.95 97.3153 23.55C97.8353 23.67 98.1653 23.77 98.3053 23.85C98.6253 24.03 98.7853 24.31 98.7853 24.69ZM94.5853 23.55C93.7053 16.57 92.9153 13.08 92.2153 13.08C91.6553 13.08 90.6753 14.72 89.2753 18C88.2753 20.36 87.4853 22.41 86.9053 24.15C87.5453 24.01 88.4953 23.84 89.7553 23.64C90.8953 23.5 92.5053 23.47 94.5853 23.55Z"
        fill="#FF4B55"
      />
    </svg>
  )
}