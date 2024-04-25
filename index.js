async function buscaEstados() {

  try {
    const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)

    const jsonData = await data.json()

  } catch (error) {
    console.error(error)
  }
}

