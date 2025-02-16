import React from 'react';
import Image from 'next/image';

const SideCarousel = () => {
  return (
    <div className="min-h-screen bg-[#2C1810]">
      <section className="py-16">
        {/* First Image - Left Side */}
        <div className="mb-20 flex items-center">
          <div className="relative w-[600px] h-[400px] rounded-r-[100px] overflow-hidden">
            <Image
              src="/images/ajrak.jpg"
              alt="Left Side Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 pl-16 text-white text-right">
            <h1 className="text-6xl font-sarem mb-6">اعلیٰ معیار کا تجربہ</h1>
            <p className="text-2xl font-sarem leading-relaxed">
              ہماری جدید مشینری ہر عمل میں درستگی اور معیار کو یقینی بناتی ہے۔
              جدید ٹیکنالوجی سے بنی اور بہترین کارکردگی کے لیے ڈیزائن کی گئی،
              یہ مشینیں ہماری پیداواری برتری کی علامت ہیں۔
            </p>
          </div>
        </div>

        {/* Second Image - Right Side */}
        <div className="flex justify-end mb-20 items-center">
          <div className="flex-1 pr-16 text-white text-right">
            <h1 className="text-6xl font-sarem mb-6">تخلیق کا عملی مظاہرہ</h1>
            <p className="text-2xl font-sarem leading-relaxed">
              ہم ممکنات کی حدوں کو آگے بڑھا رہے ہیں، ہمارا تخلیقی طریقہ روایتی
              ہنر مندی کو جدید ٹیکنالوجی کے ساتھ جوڑتا ہے۔
              ہر تفصیل کو احتیاط سے سوچا گیا ہے تاکہ بہترین نتائج فراہم کیے جا سکیں۔
            </p>
          </div>
          <div className="relative w-[600px] h-[400px] rounded-l-[100px] overflow-hidden">
            <Image
              src="/images/silaimachine.jpg"
              alt="Right Side Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Third Image - Left Side */}
        <div className="mb-20 flex items-center">
          <div className="relative w-[600px] h-[400px] rounded-r-[100px] overflow-hidden">
            <Image
              src="/images/silaimachine.jpg"
              alt="Left Side Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 pl-16 text-white text-right">
            <h1 className="text-6xl font-sarem mb-6">معیار کی ضمانت</h1>
            <p className="text-2xl font-sarem leading-relaxed">
              ہم اپنی پیداوار کے عمل میں معیار کے بلند ترین معیار کو برقرار رکھتے ہیں۔
              ہماری برتری کے عزم کو یقینی بناتا ہے کہ ہر پروڈکٹ ہمارے سخت معیار کے اصولوں پر پورا اترے۔
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideCarousel;
