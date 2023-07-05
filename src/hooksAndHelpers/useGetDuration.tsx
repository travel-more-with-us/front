import React from 'react';

export const useGetDuration = (startDate: any, endDate: any) => {

  const duration = React.useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end.getTime() - start.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  }, [startDate, endDate]);

  return duration;
  
};