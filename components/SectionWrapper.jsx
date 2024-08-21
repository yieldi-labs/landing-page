import { twMerge } from "tailwind-merge"

const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={twMerge('xl:py-20 py-20', props.className)}>
        {children}
    </section>
)

export default SectionWrapper