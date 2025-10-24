export const calculateDailyPoints = (): number => {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const day = today.getDate(); // 1-31

  // Determine season and day of season
  let dayOfSeason = 0;

  // Spring: March (2) - May (4)
  if (month >= 2 && month <= 4) {
    if (month === 2) {
      dayOfSeason = day;
    } else if (month === 3) {
      dayOfSeason = 31 + day; // March has 31 days
    } else if (month === 4) {
      dayOfSeason = 31 + 30 + day; // March + April
    }
  }
  // Summer: June (5) - August (7)
  else if (month >= 5 && month <= 7) {
    if (month === 5) {
      dayOfSeason = day;
    } else if (month === 6) {
      dayOfSeason = 30 + day; // June has 30 days
    } else if (month === 7) {
      dayOfSeason = 30 + 31 + day; // June + July
    }
  }
  // Autumn: September (8) - November (10)
  else if (month >= 8 && month <= 10) {
    if (month === 8) {
      dayOfSeason = day;
    } else if (month === 9) {
      dayOfSeason = 30 + day; // September has 30 days
    } else if (month === 10) {
      dayOfSeason = 30 + 31 + day; // September + October
    }
  }
  // Winter: December (11) - February (1)
  else {
    if (month === 11) {
      dayOfSeason = day;
    } else if (month === 0) {
      dayOfSeason = 31 + day; // December has 31 days
    } else if (month === 1) {
      dayOfSeason = 31 + 31 + day; // December + January
    }
  }

  // Calculate points based on day of season
  if (dayOfSeason === 1) {
    return 2;
  } else if (dayOfSeason === 2) {
    return 3;
  } else {
    // Build up points array
    const points: number[] = [0, 2, 3]; // index 0 unused, index 1 = day 1, index 2 = day 2

    for (let i = 3; i <= dayOfSeason; i++) {
      const newPoints = points[i - 2] + 0.6 * points[i - 1];
      points[i] = Math.round(newPoints);
    }

    return points[dayOfSeason];
  }
};

export const formatPoints = (points: number): string => {
  if (points > 1000) {
    return `${Math.round(points / 1000)}K`;
  }
  return points.toString();
};
