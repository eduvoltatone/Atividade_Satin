document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        {
            id: "info-squirtle",
            title: "Informações sobre Squirtle",
            createContent: () => {
                const sectionContent = document.createElement("div");

                const paragraph = document.createElement("p");
                paragraph.textContent = "Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.";

                const imgContainer = document.createElement("div");

                const img1 = document.createElement("img");
                img1.src = "https://img.pokemondb.net/artwork/squirtle.jpg";
                img1.alt = "Squirtle";

                const img2 = document.createElement("img");
                img2.src = "https://img.pokemondb.net/artwork/wartortle.jpg";
                img2.alt = "Wartortle";
                img2.style.padding = "35px";

                imgContainer.appendChild(img1);
                imgContainer.appendChild(img2);
                imgContainer.style.display = "flex";
                imgContainer.style.justifyContent = "space-evenly";
                imgContainer.style.flexWrap = "wrap";

                sectionContent.appendChild(paragraph);
                sectionContent.appendChild(imgContainer);

                return sectionContent;
            }
        },
        {
            id: "caracteristicas",
            title: "Características",
            createContent: () => {
                const paragraph = document.createElement("p");
                paragraph.textContent = "Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.";
                return paragraph;
            }
        },
        {
            id: "curiosidades",
            title: "Curiosidades",
            createContent: () => {
                const list = document.createElement("ul");

                const items = [
                    "Squirtle é um dos Pokémon mais populares e adoráveis.",
                    'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
                    "Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon."
                ];

                items.forEach(text => {
                    const listItem = document.createElement("li");
                    listItem.textContent = text;
                    list.appendChild(listItem);
                });

                return list;
            }
        },
        {
            id: "artigo-squirtle",
            title: "Squirtle: O Amigo Aquático",
            createContent: () => {
                const paragraphs = [
                    "Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.",
                    "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.",
                    "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas."
                ];

                const contentDiv = document.createElement("div");

                paragraphs.forEach(text => {
                    const paragraph = document.createElement("p");
                    paragraph.textContent = text;
                    contentDiv.appendChild(paragraph);
                });

                return contentDiv;
            }
        },
        {
            id: "recursos-adicionais",
            title: "Recursos Adicionais",
            createContent: () => {
                const list = document.createElement("ul");

                const resources = [
                    { text: "Pokédex - Squirtle", href: "https://www.pokemon.com/br/pokedex/squirtle" },
                    { text: "Bulbapedia - Squirtle", href: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pokémon)" }
                ];

                resources.forEach(resource => {
                    const listItem = document.createElement("li");
                    const link = document.createElement("a");
                    link.textContent = resource.text;
                    link.href = resource.href;
                    link.target = "_blank";
                    listItem.appendChild(link);
                    list.appendChild(listItem);
                });

                return list;
            }
        },
        {
            id: "evolucao",
            title: "Evoluções",
            createContent: () => {
                const list = document.createElement("ul");

                const evolutions = [
                    { name: "Squirtle", src: "https://img.pokemondb.net/artwork/squirtle.jpg" },
                    { name: "Wartortle", src: "https://img.pokemondb.net/artwork/wartortle.jpg" },
                    { name: "Blastoise", src: "https://img.pokemondb.net/artwork/blastoise.jpg" }
                ];

                evolutions.forEach((evolution, index) => {
                    const listItem = document.createElement("li");
                    const figure = document.createElement("figure");

                    const img = document.createElement("img");
                    img.src = evolution.src;
                    img.alt = evolution.name;
                    img.style.height = "150px";
                    img.style.width = "150px";

                    const figcaption = document.createElement("figcaption");
                    figcaption.textContent = `${index + 1}. ${evolution.name}`;

                    figure.appendChild(img);
                    figure.appendChild(figcaption);
                    listItem.appendChild(figure);
                    list.appendChild(listItem);
                });

                list.style.display = "flex";
                list.style.justifyContent = "space-around";
                list.style.flexWrap = "wrap";
                list.style.listStyle = "none";

                return list;
            }
        }
    ];

    const main = document.querySelector("main");

    sections.forEach(section => {
        const sectionElement = document.createElement("section");
        sectionElement.id = section.id;

        const header = document.createElement("h2");
        header.textContent = section.title;
        sectionElement.appendChild(header);

        const content = section.createContent();
        sectionElement.appendChild(content);

        main.appendChild(sectionElement);
    });
});
