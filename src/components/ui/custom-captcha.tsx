import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCheck } from "react-icons/fa";

interface CustomCaptchaProps {
  sitekey: string;
  onChange: (value: string | null) => void;
  theme?: "light" | "dark";
}

export interface CustomCaptchaRef {
  reset: () => void;
}

const CustomCaptcha = forwardRef<CustomCaptchaRef, CustomCaptchaProps>(
  ({ sitekey, onChange, theme = "light" }, ref) => {
    const [isVerified, setIsVerified] = useState(false);
    const [showRealCaptcha, setShowRealCaptcha] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setIsVerified(false);
        setShowRealCaptcha(false);
        recaptchaRef.current?.reset();
      }
    }));

    const handleVerificationClick = () => {
      if (isVerified) return;
      setShowRealCaptcha(true);
    };

    const handleCaptchaChange = (value: string | null) => {
      setIsVerified(!!value);
      onChange(value);
      if (value) {
        setShowRealCaptcha(false);
      }
    };

    const handleCaptchaError = () => {
      setIsVerified(false);
      onChange(null);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <div
          className="bg-white p-4 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer select-none"
          style={{
            border: '3px solid rgba(210, 210, 210, 0.8)',
            minWidth: '280px'
          }}
          onClick={handleVerificationClick}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {isVerified && (
                <FaCheck className="w-4 h-4 text-green-500" />
              )}
              <span className="text-sm font-medium text-gray-700">
                {isVerified ? "Human verified" : "Verify you're human"}
              </span>
            </div>

            <div className="text-xs text-gray-400">
              reCAPTCHA
            </div>
          </div>
        </div>

        {/* Show real reCAPTCHA when needed */}
        {showRealCaptcha && !isVerified && (
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={sitekey}
            onChange={handleCaptchaChange}
            onError={handleCaptchaError}
            theme={theme}
            size="normal"
          />
        )}
      </div>
    );
  }
);

CustomCaptcha.displayName = "CustomCaptcha";

export default CustomCaptcha;