const pricingModule = (gallonsRequested, state, history) => {
  const currentPrice = 1.5;
 
  const locationFactor = state === "TX" ? 0.02 : 0.04;

  const rateHistoryFactor = history ? 0.01 : 0;

  const gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;

  const companyProfitFactor = 0.1;

  const margin = currentPrice * (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor);

  const suggestedPrice = currentPrice + margin;

  const totalAmountDue = gallonsRequested * suggestedPrice;

    return {
        suggestedPrice,
        totalAmountDue
    }
}

export default pricingModule;

