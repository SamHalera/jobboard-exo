import Job from "./Job";

const Jobs = () => {
  return (
    <div className="jobs-container">
      <Job
        className="border-red"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sidney"
      />
      <Job
        className="border-green"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="border-yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="border-blue"
        title="Chef de Projets"
        contractType="CDD"
        country=" France"
        city="Paris"
      />
      <Job
        className="border-pink"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />

      <Job
        className="border-red"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        className="border-green"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans Montana"
      />
      <Job
        className="border-yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        className="border-blue"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
};

export default Jobs;
