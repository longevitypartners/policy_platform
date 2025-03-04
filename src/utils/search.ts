
export const getRiskRatingColor = (rating: number) => {
  switch (rating) {
    case 1:
      return "bg-green-100 text-green-800";
    case 2:
      return "bg-yellow-100 text-yellow-800";
    case 3:
      return "bg-red-100 text-red-800";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export const getRiskLabel = (rating: string) => {
  switch (Number(rating)) {
    case 1:
      return "Low Risk";
    case 2:
      return "Medium Risk";
    case 3:
      return "High Risk";
    default:
      return "";
  }
};
