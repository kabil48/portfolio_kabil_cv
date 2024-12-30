export const Progress = ({ value, className, indicatorClassName }: { value: number, className: string, indicatorClassName: string }) => {
    return (
      <div className={`relative ${className}`}>
        <div className={`absolute top-0 left-0 h-full ${indicatorClassName}`} style={{ width: `${value}%` }}></div>
      </div>
    );
  };
  