const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative overflow-hidden ${props.className || ""} mt-[-72px] bg-[#F5F1EB]`}>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper