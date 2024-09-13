import { twMerge } from "tailwind-merge";

const SectionWrapper = ({ children, ...props }) => (
  <section {...props} className={twMerge("md:py-20 px-4", props.className)}>
    {children}
  </section>
);

export default SectionWrapper;
