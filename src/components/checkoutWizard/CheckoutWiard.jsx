import { CheckIcon } from '@heroicons/react/24/outline';

export default function CheckoutWiard({ activeStep = 0 }) {
  const steps = ['User Login', 'Shipping Info', 'Payment'];

  return (
    <div className="mb-5 flex flex-wrap">
      {steps.map((step, i) => (
        <div
          key={step}
          className={`step-item flex-1
            ${
              i + 1 <= activeStep ? 'complete' : 'border-gray-400 text-gray-400'
            }
          `}
        >
          <div className="step">
            {i + 1 <= activeStep ? (
              <CheckIcon className="h-6 w-6 text-mainGray" />
            ) : (
              i + 1
            )}
          </div>
          <p className="font-semibold text-primary text-[1rem]">{step}</p>
        </div>
      ))}
    </div>
  );
}
