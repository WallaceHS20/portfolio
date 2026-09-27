import { useRef } from "react"
import academiaImg from "@/assets/academia.jpeg"
import gengarImg from "@/assets/gengar.jpeg"
import carImg from "@/assets/set.jpeg"
import colectImg from "@/assets/collect.jpeg"
import armyImg from "@/assets/exe.jpeg"

interface PersonalItem {
  title: string
  subtitle: string
  description: string
  tag: string
  icon: string
  image: string
  featured?: boolean
  accent?: string
}

const personalItems: PersonalItem[] = [
  {
    title: "Cyberpunk 2077",
    subtitle: "Night City é meu lugar",
    description:
      "Meu jogo favorito. Sou completamente apaixonado pela estética cyberpunk, pela atmosfera de Night City e por tudo que envolve tecnologia, neon e esse futuro distópico.",
    tag: "Meu favorito",
    icon: "pi-bolt",
    image:
      "https://images.steamusercontent.com/ugc/2058741574591783688/9C6BAD68B0072EBC34EAEE00DEE08662DE28BB27/",
    featured: true,
    accent: "blue",
  },
  {
    title: "Coleção Cyberpunk",
    subtitle: "Um pedaço de Night City",
    description:
      "Tenho uma pequena coleção de bonecos da série Cyberpunk: Mercenários e também um livro do universo Cyberpunk.",
    tag: "Coleção",
    icon: "pi-book",
    image: colectImg,
    accent: "purple",
  },
  {
    title: "Gengar",
    subtitle: "Meu Pokémon favorito 👻",
    description:
      "Não tinha como deixar o Gengar de fora. É simplesmente meu Pokémon favorito — e tenho até uma foto com ele. 😂",
    tag: "Pokémon",
    icon: "pi-heart-fill",
    image: gengarImg,
    featured: true,
    accent: "violet",
  },
  {
    title: "FPS",
    subtitle: "Battlefield é vício",
    description:
      "Adoro jogos FPS, principalmente Battlefield 1 e Battlefield V. Gosto daquela mistura de estratégia, caos e trabalho em equipe.",
    tag: "Games",
    icon: "pi-desktop",
    image:
      "https://upload.wikimedia.org/wikipedia/pt/7/75/Battlefield_1_capa.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    accent: "orange",
  },
  {
    title: "RPG",
    subtitle: "Histórias que prendem",
    description:
      "Também sou muito fã de RPGs. The Witcher é um dos universos que mais gosto, principalmente pela construção do mundo e pelas histórias.",
    tag: "RPG",
    icon: "pi-map",
    image:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/05/the-witcher.jpg?w=1024",
    accent: "emerald",
  },
  {
    title: "Anime",
    subtitle: "Entre maldições e espadas",
    description:
      "Demon Slayer, Jujutsu Kaisen e Cowboy Bebop estão entre os animes que mais curto. E sim... se pudesse escolher, queria ser o Megumi ou fazer parte do clã Zenin. 😂",
    tag: "Anime",
    icon: "pi-star",
    image:
      "https://moewalls.com/wp-content/uploads/2026/03/mahoraga-x-megumi-jujutsu-kaisen-thumb.jpg",
    accent: "red",
  },
  {
    title: "Star Wars",
    subtitle: "Uma galáxia muito, muito distante",
    description:
      "Também curto bastante o universo de Star Wars, principalmente toda a construção de mundo, personagens e histórias.",
    tag: "Universo",
    icon: "pi-sparkles",
    image: "https://images7.alphacoders.com/697/thumb-1920-697515.jpg",
    accent: "yellow",
  },
  {
    title: "O Celta Guerreiro",
    subtitle: "Sim, ele ainda está vivo 😂",
    description:
      "Meu Celta já passou por algumas histórias e continua firme. Não é apenas um carro: já virou parte da minha rotina e das minhas histórias.",
    tag: "Lifestyle",
    icon: "pi-car",
    image: carImg,
    featured: true,
    accent: "cyan",
  },
  {
    title: "Academia",
    subtitle: "Disciplina fora do código",
    description:
      "Gosto de treinar e manter a academia como parte da rotina. Afinal, não adianta otimizar o código e deixar o hardware sem manutenção. 😂",
    tag: "Rotina",
    icon: "pi-bolt",
    image: academiaImg,
    accent: "blue",
  },
  {
    title: "Música",

    subtitle: "Da nostalgia ao trap",

    description:
      "Escuto de tudo, de ABBA a Dilsinho. Mas quando é para escolher o que realmente curto, trap ganha fácil. Don Toliver está entre os meus favoritos — escolher uma música só é praticamente impossível. 😂",

    tag: "Playlist",

    icon: "pi-volume-up",

    image: "https://wallpaperaccess.com/full/2056647.png",

    accent: "purple",
  },

  {
    title: "Exército",
    subtitle: "Uma fase que fez parte da minha história",
    description:
      "Também servi ao Exército. Foi uma experiência importante e uma fase que contribuiu para minha disciplina e amadurecimento.",
    tag: "Experiência",
    icon: "pi-shield",
    image: armyImg,
    accent: "green",
  },
  {
    title: "Inglês",
    subtitle: "Pensando além do Brasil",
    description:
      "Estou estudando inglês porque quero viajar, conhecer outros lugares e, quem sabe, trabalhar fora do país no futuro.",
    tag: "Aprendizado",
    icon: "pi-language",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80",
    accent: "indigo",
  },
  {
    title: "Próximo idioma",
    subtitle: "Deutsch 🇩🇪",
    description:
      "Depois do inglês, quero aprender alemão. É um dos idiomas que tenho vontade de conhecer melhor.",
    tag: "Futuro",
    icon: "pi-globe",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=80",
    accent: "yellow",
  },
  {
    title: "Pizza",
    subtitle: "Minha resposta para quase tudo",
    description: "Comida favorita? Pizza. Simples assim. 🍕",
    tag: "Comida",
    icon: "pi-circle-fill",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
    accent: "red",
  },
  {
    title: "Meu próximo nível",
    subtitle: "O objetivo está definido",
    description:
      "Meu plano atual é simples: financiar meu apartamento, continuar evoluindo e me tornar cada vez mais especialista em desenvolvimento Front-end.",
    tag: "Objetivo",
    icon: "pi-code",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRhbWVudG8lMjBwZXF1ZW5vfGVufDB8fDB8fHww",
    featured: true,
    accent: "blue",
  },
]

export const PersonalSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return

    const container = scrollRef.current
    const card = container.querySelector<HTMLElement>("article")

    const cardWidth = card?.offsetWidth ?? 300
    const gap = 20

    container.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="sobre-mim"
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200/80
        bg-slate-50
        py-24
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-purple-500/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-blue-500/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-12 px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-purple-200
                  bg-purple-50
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-purple-600
                  dark:border-purple-900/50
                  dark:bg-purple-950/30
                  dark:text-purple-400
                "
              >
                <i className="pi pi-user text-xs" />
                Lado humano
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  dark:text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Além do <span className="text-purple-600 dark:text-purple-400">código.</span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-7
                  text-slate-500
                  dark:text-slate-400
                  sm:text-lg
                "
              >
                Nem tudo na minha vida acontece dentro de um editor de código. Games, animes,
                carros, academia, aprendizado e alguns sonhos fazem parte de quem eu sou.
              </p>
            </div>

            {/* CONTROLES */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Ver itens anteriores"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-x-0.5
                  hover:border-purple-300
                  hover:text-purple-600
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:text-slate-400
                  dark:hover:border-purple-800
                  dark:hover:text-purple-400
                "
              >
                <i className="pi pi-arrow-left text-sm" />
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Ver próximos itens"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:translate-x-0.5
                  hover:border-purple-300
                  hover:text-purple-600
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:text-slate-400
                  dark:hover:border-purple-800
                  dark:hover:text-purple-400
                "
              >
                <i className="pi pi-arrow-right text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="
    flex
    w-full
    touch-pan-x
    snap-x
    snap-mandatory
    gap-4
    overflow-x-auto
    overflow-y-hidden
    overscroll-x-contain
    scroll-smooth
    px-5
    pb-8
    [-webkit-overflow-scrolling:touch]
    [scrollbar-width:none]
    sm:gap-5

    sm:px-8
    lg:px-10

    [&::-webkit-scrollbar]:hidden
  "
        >
          {personalItems.map((item, index) => (
            <article
              key={item.title}
              className={`
        group
        relative
        flex
        w-[calc(100vw-40px)]
        min-w-[calc(100vw-40px)]
        snap-center
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500

        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-slate-800

        dark:bg-slate-900
        sm:w-[350px]

        sm:min-w-[350px]
        sm:snap-start

        lg:w-[390px]
        lg:min-w-[390px]
      `}
            >
              {/* IMAGE */}
              <div
                className={`
          relative
          h-60
          w-full
          shrink-0
          overflow-hidden

          sm:h-64

          ${item.featured ? "sm:h-72" : ""}
        `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 4 ? "eager" : "lazy"}
                  draggable={false}
                  className="
            h-full
            w-full
            select-none
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0"
                  }}
                />

                {/* Overlay */}
                <div
                  className="
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/80
            via-slate-950/10
            to-transparent
            opacity-80
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                />

                {/* Número */}
                <span
                  className="
            absolute
            left-5
            top-5
            font-mono
            text-xs
            font-bold
            tracking-widest
            text-white/60
          "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Tag */}
                <span
                  className="
            border-white/15
            absolute
            right-5
            top-5
            rounded-full
            border
            bg-black/25
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-white
            backdrop-blur-md
          "
                >
                  {item.tag}
                </span>

                {/* Image bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 text-white/70">
                    <i className={`pi ${item.icon} text-xs`} />

                    <span className="truncate text-[11px] font-semibold uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
                  <div
                    className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-slate-100
              text-slate-500
              transition-all
              duration-300
              group-hover:bg-purple-600
              group-hover:text-white
              dark:bg-slate-800
              dark:text-slate-400
              dark:group-hover:bg-purple-600
              dark:group-hover:text-white
            "
                  >
                    <i className={`pi ${item.icon} text-xs`} />
                  </div>

                  <span
                    className="
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-slate-400
            "
                  >
                    {item.featured && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                        Destaque
                      </>
                    )}
                  </span>

                  <span
                    className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              text-slate-300
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-purple-600
              dark:text-slate-700
              dark:group-hover:text-purple-400
            "
                  >
                    <i className="pi pi-arrow-right text-xs" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SCROLL HINT */}
        <div className="mt-3 flex items-center justify-center gap-3 px-5">
          <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />

          <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            <i className="pi pi-arrows-h" />
            Arraste para explorar
          </span>

          <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* FINAL GOAL */}
        <div className="mt-16 px-5 sm:px-8 lg:px-10">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900
              sm:p-10
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-32
                h-72
                w-72
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  Próximo capítulo
                </span>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    text-slate-950
                    dark:text-white
                    sm:text-3xl
                  "
                >
                  O objetivo agora é me tornar especialista em Front-end.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  Continuar evoluindo tecnicamente, estudar inglês, conhecer outro lugares e
                  construir uma carreira cada vez mais sólida em desenvolvimento de interfaces e
                  experiências digitais.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-blue-600
                    dark:bg-blue-950/40
                    dark:text-blue-400
                  "
                >
                  <i className="pi pi-code text-xl" />
                </div>

                <div>
                  <span className="block text-xs font-medium text-slate-400">
                    Meta profissional
                  </span>

                  <span className="mt-1 block text-sm font-bold text-slate-900 dark:text-white">
                    Front-end Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
