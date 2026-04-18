import Image from "next/image";

export interface FooterIcon {
  src: string;
  alt: string;
  href: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface TeamMember {
  /** Label shown in bold. Leave empty to render names-only (no "Role:" prefix). */
  role: string;
  names: string;
}

export interface TeamSection {
  title: string;
  members: TeamMember[];
}

export interface DatabaseEntry {
  title: string;
  href: string;
}

export interface StudyDetail {
  description: string;
  /** When set, wraps description in an anchor tag. */
  descriptionHref?: string;
  organization?: string;
  documentType?: string;
  institution?: string;
  /** Extra dim lines rendered between institution and year. */
  extraLines?: string[];
  year?: string | number;
  partnership?: {
    prefix?: string;
    href: string;
    label: string;
  };
}

export interface StoryFooterProps {
  studyDetail?: StudyDetail;
  realizacao?: FooterIcon[];
  parceiros?: FooterIcon[];
  teams?: TeamSection[];
  databases?: DatabaseEntry[];
}

function IconGroup({ icons }: { icons: FooterIcon[] }) {
  return (
    <div className="flex justify-start  gap-4 lg:gap-6">
      {icons.map((icon) => (
        <a
          key={icon.src}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            className={icon.className ?? "h-10 lg:h-12 w-auto brightness-0 invert"}
            width={icon.width ?? 120}
            height={icon.height ?? 48}
          />
        </a>
      ))}
    </div>
  );
}

export default function StoryFooter({
  studyDetail,
  realizacao,
  parceiros,
  teams,
  databases,
}: StoryFooterProps) {
  const hasRealiz = realizacao && realizacao.length > 0;
  const hasParceiros = parceiros && parceiros.length > 0;
  const hasRightColumn = hasRealiz || hasParceiros;

  const hasStudyMeta =
    studyDetail &&
    (studyDetail.documentType ||
      studyDetail.institution ||
      (studyDetail.extraLines && studyDetail.extraLines.length > 0) ||
      studyDetail.year ||
      studyDetail.partnership);

  const showHeader = studyDetail || hasRightColumn;

  return (
    <footer
      className="bg-[#0E171D] text-white py-24 px-6 lg:px-12"
      style={{ fontFamily: '"Libre Baskerville", serif' }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        {showHeader && (
          <div
            className={`grid grid-cols-1 gap-4 md:gap-12 ${hasRightColumn ? "lg:grid-cols-3" : ""}`}
          >
            {/* Left top: Detalhes do estudo */}
            {studyDetail && (
              <section
                className={`order-1 lg:col-start-1 lg:row-start-1 ${hasRightColumn ? "lg:col-span-2" : ""}`}
              >
                <h2 className="text-2xl font-bold mb-6 underline decoration-2 underline-offset-4">
                  Detalhes do estudo
                </h2>
                <div className="space-y-2 text-md lg:text-lg">
                  {studyDetail.descriptionHref ? (
                    <a
                      href={studyDetail.descriptionHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white leading-relaxed underline block"
                    >
                      {studyDetail.description}
                    </a>
                  ) : (
                    <p className="text-white leading-relaxed">
                      {studyDetail.description}
                    </p>
                  )}
                  {studyDetail.organization && (
                    <p className="text-[#FFFFFF] opacity-40">
                      {studyDetail.organization}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Right top: Realização */}
            {hasRealiz && realizacao && (
              <div className="order-2 lg:col-start-3 lg:row-start-1 flex flex-col items-start">
                <div className="flex flex-col items-start">
                  <h2 className="text-xl mb-6">Realização</h2>
                  <IconGroup icons={realizacao} />
                </div>
              </div>
            )}

            {/* Left bottom: study metadata */}
            {hasStudyMeta && studyDetail && (
              <section
                className={`order-3 lg:col-start-1 lg:row-start-2 ${hasRightColumn ? "lg:col-span-2" : ""}`}
              >
                <div className="space-y-1 text-md lg:text-lg">
                  {studyDetail.documentType && (
                    <p className="text-white opacity-40">
                      {studyDetail.documentType}
                    </p>
                  )}
                  {studyDetail.institution && (
                    <p className="text-white opacity-40">
                      {studyDetail.institution}
                    </p>
                  )}
                  {studyDetail.extraLines?.map((line) => (
                    <p key={line} className="text-white opacity-40">
                      {line}
                    </p>
                  ))}
                  {studyDetail.year && (
                    <p className="text-white opacity-40">{studyDetail.year}</p>
                  )}
                  {studyDetail.partnership && (
                    <p>
                      <span className="text-white opacity-40">
                        {studyDetail.partnership.prefix ?? "Parceria com o"}{" "}
                      </span>
                      <a
                        href={studyDetail.partnership.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white! opacity-100! underline"
                      >
                        {studyDetail.partnership.label}
                      </a>
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Right bottom: Parceiros */}
            {hasParceiros && parceiros && (
              <div className="order-4 lg:col-start-3 lg:row-start-2 flex flex-col items-start">
                <div className="flex flex-col items-start">
                  <h2 className="text-xl mb-6">Parceiros</h2>
                  <IconGroup icons={parceiros} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Team Sections */}
        {teams && teams.length > 0 && (
          <div className="space-y-12">
            {teams.map((team) => (
              <section key={team.title}>
                <h2 className="text-2xl font-bold mb-6 underline decoration-2 underline-offset-4">
                  {team.title}
                </h2>
                <div className="space-y-3 text-md lg:text-lg">
                  {team.members.map((member) =>
                    member.role ? (
                      <div key={member.role}>
                        <span className="font-semibold">{member.role}:</span>
                        <span className="text-[#FFFFFF] opacity-40 ml-2">
                          {member.names}
                        </span>
                      </div>
                    ) : (
                      <p key={member.names} className="text-[#FFFFFF] opacity-40">
                        {member.names}
                      </p>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Database Section */}
        {databases && databases.length > 0 && (
          <section className="px-6 py-6 lg:px-10 lg:py-10 max-w-[600px] bg-white/6">
            <h2 className="text-2xl font-bold mb-6 underline decoration-2 underline-offset-4">
              Base de dados
            </h2>
            <div className="space-y-5 text-md lg:text-lg">
              {databases.map((db) => (
                <div
                  key={db.href}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
                >
                  <span className="font-semibold text-white">{db.title}</span>
                  <a
                    href={db.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 underline underline-offset-2 text-[#FFF]/40"
                  >
                    Acesse aqui
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </footer>
  );
}
