import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

export default function IntegrationsSection() {
  return (
    <section>
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              O ecossistema por trás do conteúdo
            </h2>
            <p className="text-muted-foreground mt-6">
              Plataformas e ferramentas que fazem parte do dia a dia da produção.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <IntegrationCard
              title="Instagram"
              description="Principal canal de publicação de conteúdo e conexão com a audiência.">
              <InstagramLogo />
            </IntegrationCard>

            <IntegrationCard
              title="Canva"
              description="Criação de artes, templates e materiais visuais para as redes.">
              <CanvaLogo />
            </IntegrationCard>

            <IntegrationCard
              title="CapCut"
              description="Edição de vídeos dinâmicos com efeitos e legendas animadas.">
              <CapCutLogo />
            </IntegrationCard>

            <IntegrationCard
              title="Lightroom"
              description="Edição e tratamento profissional de fotografia com preset exclusivo.">
              <LightroomLogo />
            </IntegrationCard>

            <IntegrationCard
              title="Google Drive"
              description="Entrega organizada de conteúdo em pasta compartilhada com o cliente.">
              <GoogleDriveLogo />
            </IntegrationCard>

            <IntegrationCard
              title="Meta Business"
              description="Gestão e publicação estratégica no Instagram e Facebook.">
              <MetaLogo />
            </IntegrationCard>
          </div>
        </div>
      </div>
    </section>
  )
}

const IntegrationCard = ({
  title,
  description,
  children,
  link = '#contato',
}: {
  title: string
  description: string
  children: React.ReactNode
  link?: string
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Link
            href={link}
            className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-[0.8rem] font-medium text-secondary-foreground shadow-none transition-colors hover:bg-secondary/80"
          >
            Saiba mais
            <ChevronRight className="ml-0 size-3.5 opacity-50" />
          </Link>
        </div>
      </div>
    </Card>
  )
}

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const CanvaLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.54 18.86c-1.64 0-2.61-.87-2.61-2.36 0-2.28 1.77-4.89 4.3-4.89.78 0 1.32.27 1.62.54l.51-2.19h1.56l-1.89 8.1h-1.5l.18-.75c-.48.45-1.14.75-2.17.75zm5.19-8.37h-1.56l.3-1.23h1.56l-.3 1.23zm-5.19 7.14c.72 0 1.32-.36 1.71-.87l.72-3.09c-.21-.24-.6-.42-1.11-.42-1.53 0-2.64 1.71-2.64 3.27 0 .78.39 1.11 1.32 1.11z"/>
  </svg>
)

const CapCutLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
)

const LightroomLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
    <path d="M.054 0v24H9.32c4.665 0 8.307-1.246 10.927-3.737 2.503-2.374 3.754-5.72 3.754-10.04 0-4.201-1.269-7.466-3.807-9.795C17.617 1.21 13.893.037 9.014.037L.054 0zm4.21 3.99h4.75c3.12 0 5.54.768 7.258 2.304 1.72 1.535 2.579 3.726 2.579 6.57 0 2.98-.903 5.259-2.709 6.833-1.806 1.574-4.368 2.362-7.687 2.362H4.265V3.99z"/>
  </svg>
)

const GoogleDriveLogo = () => (
  <svg viewBox="0 0 87.3 78" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
  </svg>
)

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-700">
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
  </svg>
)
