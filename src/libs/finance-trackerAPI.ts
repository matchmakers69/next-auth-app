const BUDGET_API = "/api/budget"; // Local API endpoint

// Function to fetch budget data from the API
export async function getBudgetList() {
  const response = await fetch(BUDGET_API);
  if (!response.ok) {
    throw new Error("Failed to fetch budget data");
  }
  return response.json();
}
