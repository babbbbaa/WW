import React from 'react';
import { Phone, Mail, MapPin, Clock, CreditCard, Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Customer Center Section */}
          <div className="bg-white/50 p-6 space-y-4 border-none shadow-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">CUSTOMER CENTER</h3>
            </div>
            <hr className="border-t-2 border-blue-600 w-12" />
            <div className="space-y-2">
              <p className="font-bold text-2xl text-blue-700">070-7633-1989</p>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  원료문의: 070-7633-1989
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  평일 09:00 ~ 17:00 | 점심 12:20 ~ 13:30
                </p>
                <p className="text-gray-600">토/일/공휴일 휴무</p>
              </div>
            </div>
          </div>

          {/* Bank Account Section */}
          <div className="bg-white/50 p-6 space-y-4 border-none shadow-sm">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">BANK ACCOUNT</h3>
            </div>
            <hr className="border-t-2 border-blue-600 w-12" />
            <div className="space-y-2 text-sm">
              <p className="font-medium">신한 몰라몰라~</p>
              <p>예금주: 엘와이코스랩(주)</p>
            </div>
          </div>

          {/* Information Section */}
          <div className="bg-white/50 p-6 space-y-4 border-none shadow-sm">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold">INFORMATION</h3>
            </div>
            <hr className="border-t-2 border-blue-600 w-12" />
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                경기도 시흥시 월곶동 1003-1 풍림빌딩, 3층 301-1호
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                cmschemistry@hanmail.net
              </p>
              <p>사업자등록번호: 323-53-00097</p>
              <p>TEL: 070-7633-1989 | FAX: 070-7633-1989</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
