async function getCategorias() {
    await new Promise(r => setTimeout(r, 4000))

    const resp = await fetch(`${process.env.API_BASE_URL}/categoria`, { next: { revalidate: 0 } })
  }