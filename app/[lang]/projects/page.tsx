import { Metadata } from "next"
import Image from "next/image"

import { PageHeader } from "@/components/page-header"
import ProjectFiltersBar from "@/components/project/project-filters-bar"
import { ProjectList } from "@/components/project/project-list"
import { ProjectResultBar } from "@/components/project/project-result-bar"
import { useTranslation } from "@/app/i18n"
import { Divider } from "@/components/divider"

export const metadata: Metadata = {
  title: "Project Library",
  description:
    "PSE is home to many projects, from cryptography research to developer tools, protocols, and proof-of-concept applications.",
}

export default async function ProjectsPage({ params: { lang } }: any) {
  const { t } = await useTranslation(lang, "projects-page")

  return (
    <Divider.Section>
      <PageHeader
        title={t("title")}
        subtitle={t("subtitle")}
        image={
          <div className="mx-auto lg:absolute lg:right-36">
            <Image
              width={280}
              height={280}
              className="mx-auto w-[160px] md:w-[180px] lg:ml-auto lg:w-[200px] xl:w-[260px]"
              src="/icons/lens.webp"
              alt="lens icon"
            />
          </div>
        }
      >
        <ProjectFiltersBar lang={lang} />
      </PageHeader>

      <div className="w-full bg-white pb-28">
        <div className="container flex flex-col gap-14 py-8">
          <div>
            <ProjectResultBar lang={lang} />
          </div>
          <ProjectList lang={lang} />
        </div>
      </div>
    </Divider.Section>
  )
}
