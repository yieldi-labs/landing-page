import { twMerge } from "tailwind-merge"

const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={twMerge('pt-2 md:py-20', props.className)}>
        {children}
    </section>
)

export default SectionWrapper