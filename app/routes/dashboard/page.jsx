const getBudgetList = async () => {
  const result = await db
    .select({
      ...getTableColumns(Budgets),
      total: sql`SUM(CAST(amount AS numeric))`, // This will sum the amount column after casting to numeric
    })
    .from(Budgets)
    // Add any necessary grouping
    .groupBy(/* your grouping columns */)
    // rest of your query...
} 