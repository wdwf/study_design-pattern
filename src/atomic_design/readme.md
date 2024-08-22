# Atomic design

O Atomic Design é uma metodologia para criar design systems. Criada por Brad Frost, é uma analogia científica que nos ajuda a pensar nas interfaces de uma maneira mais profunda.

> _Um conjunto de Átomos forma uma Molécula, e um conjunto de moléculas forma um Organismo._

O ponto é que em projetos grandes que requerem manutenção ao longo do tempo, exigem que nossas interfaces tenham uma alta capacidade de replicação e expansão de forma simples.

Átomos - Moléculas - Organismos - Template - Pages

### Átomos
São elementos básicos/simples da interface. Ou seja as tags, como ``<label>`` de um formulário ou um ``<button>``.

***Nota:*** Também podem incluir elementos mais abstratos,como paletas de cores, fontes e aspectos ainda mais invisíveis de uma interface, como animações.

### Moléculas
São grupos simples de elementos _(átomos)_, colocados juntos e funcionando como uma unidade.

Um exemplo seria um campo de busca onde teríamos ``<label>``, ``<input>``, ``<button>`` trabalhando juntos.

## Organismo
São grupos de moléculas unidas para formar uma seção relativamente complexa e distinta de uma interface.

Como por exemplo, a molécula do formulário de pesquisa combinada com a molécula de navegação, formam o organismo header.

***Nota:*** Teria a navegação da pagina e do lado teria o campo de busca.

Construir a partir de moléculas para organismos incentiva a criação de componentes reutilizáveis portáteis e independentes.

### Templates
Os Templates consistem principalmente de grupos de organismos estruturados juntos para formar páginas.

É aqui que começamos a ver coisas como layout em ação.

### Páginas
As páginas são instancias do template, onde provem conteúdos base para aquela pagina.

---

exemplo de uso da metodologia:
```
components/
   atoms/
      - Button
      - Input
   molecules/
      - Search
   organisms/
      - Navbar
   templates/
      - LoggedIn
   views/
      - Home
```