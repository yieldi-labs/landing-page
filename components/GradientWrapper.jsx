const GradientWrapper = ({ children, ...props }) => (
  <div {...props} className={`relative ${props.className || ""} bg-[#F5F1EB]`}>
    <div className="md:relative">{children}</div>
  </div>
);

export default GradientWrapper;
