import React from 'react';
import 'tailwindcss/tailwind.css';
import Antonella from '@/app/family/carta1';
import Ciro from '@/app/family/carta2';
import Thiago from '@/app/family/carta4';
import Celia from '@/app/family/carta6';

function Family() {
    return (
        <div className="container mx-auto px-4 sm:px-8 mt-8">
            {/* //routes */}
            <Celia />
            <Antonella />
            <Ciro />
            <Thiago />
        </div>
    );
}

export default Family;
