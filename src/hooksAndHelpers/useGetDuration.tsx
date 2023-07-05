import React from 'react';

export const useGetDuration = (startDate: Date | null, endDate: Date | null) => {

  const duration = React.useMemo(() => {
    const start = startDate && new Date(startDate);
    const end = endDate && new Date(endDate);
    const timeDifference = end && start && end.getTime() - start.getTime();
    const daysDifference = timeDifference && Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  }, [startDate, endDate]);

  return duration;
  
};