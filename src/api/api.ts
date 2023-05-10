import logements from "../data/logements.json";
import data from "../data/about.json";

export const getLogement = (logementId: string) => {
  const logement = logements.find((logement) => logement.id === logementId);

  return logement;
};

export const getAllLogements = () => {
  return logements;
};

export const getAbout = () => {
  return data;
};
