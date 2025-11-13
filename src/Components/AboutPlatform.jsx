// src/Components/AboutPlatform.jsx
import React from 'react';

const AboutPlatform = () => {
  return (
    <div className="container mx-auto max-w-[90%] my-10">
      {/* Main card */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl md:text-3xl">
            About <span className="text-primary">Movie Master Pro</span>
          </h2>
          <p className="text-sm md:text-base text-base-content/80 leading-relaxed">
            Movie Master Pro হলো একটা simple কিন্তু powerfull movie management
            প্ল্যাটফর্ম, যেখানে তুমি নিজের পছন্দের সিনেমা যোগ করতে পারো, 
            এগুলোর details দেখতে পারো, wishlist এ রাখতে পারো এবং 
            সবকিছুকে সুন্দরভাবে ম্যানেজ করতে পারো। 
          </p>

          <p className="mt-2 text-sm md:text-base text-base-content/80 leading-relaxed">
            পুরো প্রজেক্টটা তৈরি করা হয়েছে শেখার সুবিধার জন্য – 
            React, Firebase Authentication, Express, MongoDB, DaisyUI/Tailwind 
            ইত্যাদি একসাথে প্র্যাকটিস করার একটা playground হিসেবে।
          </p>

          {/* 3-column features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-box bg-base-200/60">
              <h3 className="font-semibold mb-1">🎬 Movie Collection</h3>
              <p className="text-sm text-base-content/80">
                নিজের পছন্দের সিনেমা যোগ করে পুরো collection এক জায়গায় রাখা
                যায় – poster, rating, genre, summary সবকিছুসহ।
              </p>
            </div>

            <div className="p-4 rounded-box bg-base-200/60">
              <h3 className="font-semibold mb-1">⭐ Wishlist & Top Rated</h3>
              <p className="text-sm text-base-content/80">
                যেগুলো পরে দেখতে চাও সেগুলো wishlist এ রাখো, আর 
                টপ rated movie গুলো দ্রুত খুঁজে বের করো।
              </p>
            </div>

            <div className="p-4 rounded-box bg-base-200/60">
              <h3 className="font-semibold mb-1">👤 User Focused</h3>
              <p className="text-sm text-base-content/80">
                Firebase দিয়ে নিরাপদ লগিন, প্রতিটা ইউজারের জন্য আলাদা wishlist 
                এবং MongoDB দিয়ে ডেটা সুরক্ষিতভাবে stored থাকে।
              </p>
            </div>
          </div>

          {/* Small footer / note */}
          <div className="mt-6 border-t pt-4 text-xs md:text-sm text-base-content/70">
            <p>
              এই প্ল্যাটফর্মটি মূলত প্র্যাকটিস এবং শেখার উদ্দেশ্যে তৈরি, 
              তবে চাইলে এটাকে extend করে আরো নতুন ফিচার (review, comment, 
              watch history ইত্যাদি) যোগ করা যাবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPlatform;
