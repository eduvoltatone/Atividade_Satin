function changePageTitle(title) {
    document.title = title
  }
  
  function generateInfoSection(municipioUf) {
  
    const h1 = document.createElement('h1')
    h1.id = "info-manucipio-label"
    h1.textContent = `Município de ${municipioUf}`
  
    const section = document.querySelector('#info-municipio')
  
    section.appendChild(h1)

  
  }
  
  async function getMunicipioData(uf) {
  
    try {
      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  
      const jsonData = await data.json()
  
      //const spritesArray = Object.values(jsonData.nome)
      /*const pokemonImgArray = spritesArray.filter((item) => typeof item === "string")*/
  
      generateInfoSection(uf)
    } catch (error) {
      console.error(error)
    }
  }
  
  function getSearchParams() {
    // Early return -> Caso location search, não faz nada.
    if (!location.search) {
      return
    }
  
    // URLSearchParams é uma classe que facilita a manipulação de query strings
    const urlSearchParams = new URLSearchParams(location.search)
  
    // Pegando o valor do parâmetro uf
    const municipioUf = urlSearchParams.get('uf')
  
    changePageTitle(`Município de ${municipioUf}`)
    getMunicipioData(municipioUf)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    getSearchParams()
  })