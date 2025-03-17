"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, Database, Globe, Lock, Cpu, BarChart, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { ExpandableContent } from "@/components/expandable-content"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигация */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Globe className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">IT Трансформация</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#introduction"
                className="transition-colors hover:text-foreground/80"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Введение
              </Link>
              <Link
                href="#technologies"
                className="transition-colors hover:text-foreground/80"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("technologies")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                IT-технологии
              </Link>
              <Link
                href="#business"
                className="transition-colors hover:text-foreground/80"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("business")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Бизнес
              </Link>
              <Link
                href="#ai"
                className="transition-colors hover:text-foreground/80"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("ai")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                ИИ и данные
              </Link>
              <Link
                href="#impact"
                className="transition-colors hover:text-foreground/80"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Влияние
              </Link>
              <Link
                href="#conclusion"
                className="transition-colors hover:text-foreground/80"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("conclusion")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Заключение
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Герой-секция */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Как IT-технологии меняют мир
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Исследование влияния цифровой трансформации на все сферы жизни общества
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  onClick={() => {
                    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Начать изучение <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Введение */}
        <section id="introduction" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Введение</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Современный мир стремительно меняется благодаря развитию IT-технологий. Они внедряются во все сферы
                    жизни, делая процессы более удобными, эффективными и доступными.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Актуальность проекта</h3>
                  <p className="max-w-[600px] text-muted-foreground">
                    Цифровая трансформация бизнеса, медицинские инновации, автоматизация производства и улучшение
                    коммуникаций — всё это стало возможным благодаря IT. Важно понимать влияние этих технологий и
                    прогнозировать возможные изменения в будущем.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Цель проекта</h3>
                  <p className="max-w-[600px] text-muted-foreground">
                    Проанализировать, каким образом IT-технологии изменяют мир, какие преимущества и риски они несут, а
                    также спрогнозировать возможное развитие отрасли в будущем. Исследовать основные направления
                    развития IT, их влияние на различные сферы жизни.
                  </p>
                </div>
                <ExpandableContent
                  title="Задачи проекта"
                  content="1. Изучить основные понятия и направления развития IT-технологий.
                  2. Проанализировать влияние IT на бизнес и цифровую трансформацию компаний.
                  3. Исследовать новые киберугрозы и как они меняется благодаря IT.
                  4. Проанализировать машинное обучение и его виды.
                  5. Исследовать нейросети и как они работают.
                  6. Рассмотреть перспективы будущего развития IT.
                  7. Определить возможные риски и проблемы, связанные с широким внедрением IT-технологий.
                  8. Подвести итоги и сделать выводы о влиянии IT на общество и его развитие."
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                    <Zap className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Инновации</h3>
                    <p className="text-center text-sm text-muted-foreground">
                      Новые технологии меняют привычные процессы
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                    <Globe className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Глобализация</h3>
                    <p className="text-center text-sm text-muted-foreground">Стирание границ в цифровом мире</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                    <Lock className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Безопасность</h3>
                    <p className="text-center text-sm text-muted-foreground">Новые вызовы кибербезопасности</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                    <Cpu className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Автоматизация</h3>
                    <p className="text-center text-sm text-muted-foreground">Оптимизация процессов с помощью IT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT-технологии */}
        <section id="technologies" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">IT-технологии</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Совокупность технологий, методов и процессов, которые используются для обработки, хранения, передачи и
                  защиты информации.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Code className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Программное обеспечение</h3>
                  <p className="text-muted-foreground">
                    Программы и приложения, которые выполняются на компьютерах, мобильных устройствах и других цифровых
                    платформах.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Программное_обеспечение", "_blank")}
                >
                  Узнать больше
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Cpu className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Аппаратное обеспечение</h3>
                  <p className="text-muted-foreground">
                    Физическая составляющая IT-системы, включающая устройства для вычислений и передачи данных.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Аппаратное_обеспечение", "_blank")}
                >
                  Узнать больше
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Сетевые технологии</h3>
                  <p className="text-muted-foreground">
                    Средства связи и инфраструктура, обеспечивающие передачу данных между различными устройствами и
                    пользователями.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Компьютерная_сеть", "_blank")}
                >
                  Узнать больше
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Database className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Облачные технологии</h3>
                  <p className="text-muted-foreground">
                    Позволяют хранить данные и выполнять вычисления на удаленных серверах, а не на локальных
                    устройствах.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Облачные_вычисления", "_blank")}
                >
                  Узнать больше
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BarChart className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Искусственный интеллект</h3>
                  <p className="text-muted-foreground">
                    Создание и использование систем, которые могут выполнять задачи, требующие "интеллекта", такие как
                    анализ данных.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Искусственный_интеллект", "_blank")}
                >
                  Узнать больше
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Lock className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Кибербезопасность</h3>
                  <p className="text-muted-foreground">
                    Защита данных и информационных систем от несанкционированного доступа, кибератак и других угроз.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Информационная_безопасность", "_blank")}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Цифровая трансформация бизнеса */}
        <section id="business" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Цифровая трансформация бизнеса</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Процесс интеграции цифровых технологий в различные аспекты работы компании с целью повышения ее
                    эффективности.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Автоматизация производственных процессов</h3>
                  <p className="max-w-[600px] text-muted-foreground">
                    Использование роботизированных систем и производственных линий, управляемых через интернет,
                    позволяет снизить затраты на рабочую силу и ускорить выпуск продукции.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Автоматизация документооборота</h3>
                  <p className="max-w-[600px] text-muted-foreground">
                    Электронный документооборот помогает ускорить процессы утверждения и подписания документов, исключая
                    необходимость их печатания и хранения на бумаге.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Оптимизация логистики и цепочек поставок</h3>
                  <p className="max-w-[600px] text-muted-foreground">
                    С помощью IT-решений компании могут контролировать движение товаров на всех этапах — от производства
                    до доставки конечному потребителю.
                  </p>
                </div>
                <ExpandableContent
                  title="Примеры успешной цифровой трансформации"
                  content="1. Amazon - от онлайн-книжного магазина до глобальной платформы электронной коммерции и облачных услуг.
                  2. Netflix - от сервиса по аренде DVD до ведущей стриминговой платформы с собственным контентом.
                  3. Сбербанк - от традиционного банка к экосистеме цифровых сервисов.
                  4. Tesla - использование цифровых технологий для создания инновационных электромобилей и систем управления энергией."
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Преимущества цифровой трансформации</h3>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Повышение эффективности и снижение затрат</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Улучшение качества услуг и товаров</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Оптимизация бизнес-процессов</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Быстрая адаптация к изменениям рынка</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Улучшение взаимодействия с клиентами</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                          <span>Доступ к новым рынкам и возможностям</span>
                        </li>
                      </ul>
                      <Button
                        className="mt-4"
                        onClick={() =>
                          window.open(
                            "https://www.tadviser.ru/index.php/Статья:Цифровая_трансформация_в_России",
                            "_blank",
                          )
                        }
                      >
                        Примеры в России
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Искусственный интеллект и анализ данных */}
        <section id="ai" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Искусственный интеллект и анализ данных
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ключевые элементы современной цифровой трансформации, которые активно применяются в бизнесе, науке,
                  медицине и других областях.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6">
                <h3 className="text-2xl font-bold">Машинное обучение</h3>
                <p className="text-muted-foreground">
                  Подмножество ИИ, которое позволяет машинам обучаться на основе данных и улучшать свои результаты без
                  явного программирования. В процессе обучения алгоритм анализирует данные, выявляет закономерности и
                  использует эти знания для прогнозирования и принятия решений.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Машинное_обучение", "_blank")}
                >
                  Подробнее о машинном обучении
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6">
                <h3 className="text-2xl font-bold">Глубокое обучение</h3>
                <p className="text-muted-foreground">
                  Более сложная форма машинного обучения, которая использует многослойные нейронные сети для анализа
                  данных. Эти сети могут обучаться на огромных объемах данных, что делает их идеальными для задач,
                  связанных с распознаванием изображений, обработки естественного языка и автономными транспортными
                  средствами.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Глубокое_обучение", "_blank")}
                >
                  Подробнее о глубоком обучении
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6">
                <h3 className="text-2xl font-bold">Нейронные сети</h3>
                <p className="text-muted-foreground">
                  Математическая модель, вдохновленная работой мозга человека, состоящая из множества взаимосвязанных
                  элементов (нейронов). Эти сети используются для решения сложных задач, таких как классификация,
                  регрессия и прогнозирование. Нейронные сети применяются в самых разных областях: от распознавания
                  образов и речи до диагностики заболеваний.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Искусственная_нейронная_сеть", "_blank")}
                >
                  Подробнее о нейронных сетях
                </Button>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6">
                <h3 className="text-2xl font-bold">Обработка естественного языка</h3>
                <p className="text-muted-foreground">
                  Область ИИ, которая направлена на создание систем, способных понимать и генерировать человеческий
                  язык. Эти технологии используются в чат-ботах, системах перевода, анализе тональности текста и других
                  приложениях, связанных с обработкой текстовой информации.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://ru.wikipedia.org/wiki/Обработка_естественного_языка", "_blank")}
                >
                  Подробнее о NLP
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Как IT-технологии меняют мир */}
        <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Как IT-технологии меняют мир</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Преимущества и риски внедрения информационных технологий в различные сферы жизни.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Цифровизация и автоматизация процессов</h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Преимущества:</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Повышение эффективности и снижение затрат</li>
                    <li>Улучшение качества услуг и товаров</li>
                    <li>Оптимизация бизнес-процессов</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Риски:</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Зависимость от технологий</li>
                    <li>Угрозы безопасности</li>
                  </ul>
                </div>
                <ExpandableContent
                  title="Подробнее о цифровизации"
                  content="Цифровизация процессов позволяет компаниям значительно сократить время выполнения задач, минимизировать человеческие ошибки и оптимизировать ресурсы. Однако, это требует значительных инвестиций в технологии и обучение персонала."
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Персонализация и улучшение клиентского опыта</h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Преимущества:</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Повышение удовлетворенности клиентов</li>
                    <li>Рост конверсии</li>
                    <li>Понимание потребностей клиентов</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Риски:</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Проблемы с конфиденциальностью</li>
                    <li>Нарушение приватности</li>
                  </ul>
                </div>
                <ExpandableContent
                  title="Подробнее о персонализации"
                  content="Персонализация позволяет создавать индивидуальные предложения для клиентов на основе их предпочтений и поведения. Это повышает лояльность и увеличивает продажи. Однако, сбор и анализ персональных данных вызывает опасения относительно приватности и может привести к нарушению законодательства о защите данных."
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Революция в здравоохранении</h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Преимущества:</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Ускорение диагностики</li>
                    <li>Доступность медицинских услуг</li>
                    <li>Снижение рисков для пациента</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Риски:</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Отсутствие человеческого фактора</li>
                    <li>Необходимость в высококвалифицированных специалистах</li>
                  </ul>
                </div>
                <ExpandableContent
                  title="Подробнее о медицине"
                  content="IT-технологии в медицине позволяют проводить более точную диагностику, удаленные консультации и мониторинг состояния пациентов. Искусственный интеллект помогает анализировать медицинские изображения и выявлять заболевания на ранних стадиях. Однако, существуют опасения относительно надежности автоматизированных систем и защиты конфиденциальных медицинских данных."
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">Безопасность и киберугрозы</h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Преимущества:</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Повышение защищенности</li>
                    <li>Инновации в области защиты данных</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Риски:</h4>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Кибератаки и утечка данных</li>
                    <li>Проблемы с конфиденциальностью</li>
                  </ul>
                </div>
                <ExpandableContent
                  title="Подробнее о кибербезопасности"
                  content="С развитием IT-технологий возрастает и угроза кибератак. Хакеры могут получить доступ к личным данным, финансовой информации, а также нанести ущерб бизнесу, нарушив работу критической инфраструктуры. Современные системы безопасности и технологии шифрования позволяют значительно улучшить защиту данных, но требуют постоянного обновления и совершенствования."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Заключение */}
        <section id="conclusion" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Заключение</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  IT-технологии играют решающую роль в изменении современного мира, оказывая влияние на все сферы жизни.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12 text-center">
              <p className="text-muted-foreground">
                Цифровая трансформация, автоматизация процессов, развитие искусственного интеллекта, большие данные и
                облачные вычисления открывают новые горизонты для развития и инноваций. Эти технологии позволяют
                повышать производительность, создавать новые продукты и услуги, улучшать качество жизни, а также решать
                глобальные проблемы, такие как изменение климата и заболевания.
              </p>
              <p className="text-muted-foreground">
                Однако вместе с преимуществами возникают и определенные риски. Конфиденциальность данных, киберугрозы,
                потеря рабочих мест и социальное неравенство — это вызовы, с которыми человечество должно столкнуться и
                разработать эффективные решения. Важно обеспечить баланс между развитием технологий и вниманием к
                этическим, социальным и экологическим аспектам.
              </p>
              <Button
                className="mt-6"
                onClick={() => {
                  const element = document.getElementById("introduction")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Вернуться к началу
              </Button>
            </div>
          </div>
        </section>

        {/* Кнопка "Наверх" */}
        <ScrollToTopButton />
      </main>

      {/* Футер */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 IT Трансформация. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://github.com", "_blank")}
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open("https://twitter.com", "_blank")}
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

