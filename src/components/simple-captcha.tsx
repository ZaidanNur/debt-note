'use client';

import { useState, useEffect } from 'react';

type SimpleCaptchaProps = {
    onValidate: (isValid: boolean) => void;
};

export const SimpleCaptcha = ({ onValidate }: SimpleCaptchaProps) => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isValid, setIsValid] = useState(false);

    // Generate new problem on mount
    useEffect(() => {
        generateProblem();
    }, []);

    const generateProblem = () => {
        setNum1(Math.floor(Math.random() * 10)); // 0-9
        setNum2(Math.floor(Math.random() * 10)); // 0-9
        setUserAnswer('');
        setIsValid(false);
        onValidate(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setUserAnswer(val);

        const expected = num1 + num2;
        const isCorrect = parseInt(val) === expected;

        setIsValid(isCorrect);
        onValidate(isCorrect);
    };

    return (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Keamanan: Berapa hasil dari <b>{num1} + {num2}</b>?
            </label>
            <div className="flex gap-2">
                <input
                    type="number"
                    value={userAnswer}
                    onChange={handleInputChange}
                    className={`block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 sm:text-sm text-black ${isValid
                        ? 'border-green-500 focus:ring-green-500 focus:border-green-500 bg-green-50'
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                        }`}
                    placeholder="?"
                />
                <button
                    type="button"
                    onClick={generateProblem}
                    className="px-3 py-2 text-gray-500 hover:text-gray-700 bg-white border border-gray-300 rounded-md text-xs"
                    title="Ganti Soal"
                >
                    ↻
                </button>
            </div>
            {isValid && (
                <p className="text-green-600 text-xs mt-1">✓ Jawaban benar</p>
            )}
        </div>
    );
};
