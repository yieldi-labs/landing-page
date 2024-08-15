const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`xl:py-20 py-20 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper