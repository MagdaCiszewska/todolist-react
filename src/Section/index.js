import "./style.css";

const Section = ({ title, body, extraButtons }) => (
  <section className="section">
    <header className="section__header">
      <h3 className="section__title">{title}</h3>
      {extraButtons}
    </header>
    <div className="section__body">{body}</div>
  </section>
);

export default Section;
