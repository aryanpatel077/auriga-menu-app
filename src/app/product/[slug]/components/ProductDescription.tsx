export default function ProductDescription({description}: {description: string}) {
    return (
      <div className="mt-4">
        <p className="text-lg font-light">
          {description}
        </p>
      </div>
    );
  }
  