module.exports = {
  purge: [
    './app/**/*.html',
    './app/**/*.js',
    './app/**/*.md',
  ],
  theme: {
    screens: {
      'sm': '700px',
      'md': '1024px',
      'lg': '1440px',
    },
    colors: {
      'main': '#2B8275',
      'secondary': '#2B2C28',
      'tertiary': '#F7B501',
      'white': '#fff',
      'black': '#000',
      'light-grey': 'rgba(0, 0, 0, 0.3)',
    },
    spacing: {
      '0': '0',
      '1': '4px',
      '2': '8px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px',
      '8': '84px',
    },
    maxHeight: {
      '0': '0',
    },
    maxWidth: {
      '600': '600px',
      '750': '750px',
    },
    boxShadow: {
      md: '0 7px 30px -10px rgba(150,170,180,0.5)',
    },
    gridTemplateColumns: {
      'landing-blog-sm': 'repeat(auto-fill, minmax(100%, 1fr));',
      'landing-blog-lg': 'repeat(auto-fill, minmax(400px, 1fr));',
    },
    opacity: {
      '95': '0.95'
    },
    backgroundImage: (theme) => ({
      'logo-black-small': "url('/images/logo-black-small.png')",
      'logo-white-small': "url('/images/logo-white-small.png')",
      'logo-white-large': "url('/images/logo-white-large.png')",
      'logo-black-large': "url('/images/logo-black-large.png')",
      'blog-blob-landing': "url('/images/blog-blob.svg')",
    })
  },
  variants: {},
  plugins: [],
}

