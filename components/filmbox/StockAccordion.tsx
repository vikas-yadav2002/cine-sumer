// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';



// const filmStocks = [
//   {
//     brand: 'Kodak',
//     description:
//       'Industry-standard cinema film stocks with rich color reproduction, strong skin tones, and wide latitude.',
//     series: [
//       {
//         name: 'Vision3',
//         stocks: ['500T (5219)', '250D (5207)', '200T (5213)', '50D (5203)']
//       },
//       {
//         name: 'Vision2',
//         stocks: [
//           '500T (5218 / 5260)',
//           '200T (5217)',
//           '100T (5212)',
//           '50D (5201)',
//           '250D (5222 / 5225)'
//         ]
//       },
//       {
//         name: 'Vision1',
//         stocks: ['200T', '500T']
//       },
//       {
//         name: 'Legacy',
//         stocks: [
//           '5274 (200T)',
//           '5246 (250D)',
//           '5279 (500T)',
//           '5277 (320T)',
//           '5284 (500T)',
//           '5289 (800T)',
//           '5263 (500T)'
//         ]
//       },
//       {
//         name: 'Special',
//         stocks: ['5620 Primetime (640T)']
//       }
//     ]
//   },

//   {
//     brand: 'Fujifilm',
//     description:
//       'Film stocks known for softer contrast, pastel tones, and smooth highlight rolloff.',
//     series: [
//       {
//         name: 'Eterna',
//         stocks: [
//           '500T (8573)',
//           '400T (8583 / 8593)',
//           '250D (8563)',
//           '250T (8553)'
//         ]
//       },
//       {
//         name: 'Eterna Vivid',
//         stocks: ['160T (8543)', '500T (8547)']
//       },
//       {
//         name: 'Reala',
//         stocks: ['500D (8592)']
//       },
//       {
//         name: 'Super F-Series',
//         stocks: ['500T (8572)', '125T (8532)']
//       },
//       {
//         name: 'Color A',
//         stocks: ['250T (8518)']
//       }
//     ]
//   },

//   {
//     brand: 'Eastman',
//     description:
//       'Classic and vintage film stocks with punchy contrast and strong grain structure.',
//     series: [
//       {
//         name: 'EXR',
//         stocks: [
//           '5298 (500T)',
//           '5287 (200T)',
//           '5293 (250T)',
//           '5296 (500T)',
//           '5248 (100T)',
//           '5245 (50D)'
//         ]
//       },
//       {
//         name: 'ECN-II',
//         stocks: [
//           '5297 (250D)',
//           '5294 (400T)',
//           '5247 (125T / 100T)',
//           '5293 (250T)'
//         ]
//       },
//       {
//         name: 'ECN-1',
//         stocks: [
//           '5254 (100T)',
//           '5251 (50T)',
//           '5250 (50D)',
//           '5248 (25T)',
//           '5247 (16D)'
//         ]
//       }
//     ]
//   },

//   {
//     brand: 'Print Film Stocks',
//     description:
//       'Photochemical print stocks defining final cinematic projection contrast and density.',
//     series: [
//       {
//         name: 'Kodak',
//         stocks: ['2383', '2393 (Premier)', '2395 (Teleprint)']
//       },
//       {
//         name: 'Eastman',
//         stocks: [
//           '5381',
//           '5382',
//           '5384',
//           '5385 (LC)',
//           '5386 (EXR)'
//         ]
//       },
//       {
//         name: 'Fujifilm',
//         stocks: ['3513', '3513D', '3523XD']
//       }
//     ]
//   },

//   {
//     brand: 'Digital Intermediate',
//     description:
//       'Digital output transforms replacing traditional print film pipelines.',
//     series: [
//       {
//         name: 'Color Spaces',
//         stocks: [
//           'Rec.709 (Gamma 2.4)',
//           'sRGB (Gamma 2.2)',
//           'Display P3',
//           'P3-D60',
//           'P3-DCI',
//           'DCI XYZ',
//           'Rec.2100 PQ',
//           'Rec.2100 HLG',
//           'Dolby Vision PQ'
//         ]
//       }
//     ]
//   }
// ];

// export function StockAccordion() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-16 md:py-24">
//       <div className="max-w-4xl mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, margin: '-100px' }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-filmbox-text-primary mb-4">
//             Film Stock Library
//           </h2>
//           <p className="text-lg text-filmbox-text-secondary">
//             Meticulously crafted profiles from real film measurements
//           </p>
//         </motion.div>

//         <div className="space-y-4">
//   {filmStocks.map((brand, index) => (
//     <motion.div
//       key={brand.brand}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       viewport={{ once: true }}
//       className="rounded-2xl bg-filmbox-card border border-filmbox-border shadow-cinematic overflow-hidden"
//     >
//       <button
//         onClick={() => toggleAccordion(index)}
//         className="w-full p-6 text-left flex items-center justify-between"
//       >
//         <div>
//           <h3 className="text-xl font-bold text-filmbox-text-primary">
//             {brand.brand}
//           </h3>

//           <p className="text-sm text-filmbox-text-muted mt-1">
//             {brand.description}
//           </p>
//         </div>

//         <motion.div
//           animate={{ rotate: openIndex === index ? 180 : 0 }}
//         >
//           <ChevronDown className="w-5 h-5" />
//         </motion.div>
//       </button>

//       <AnimatePresence>
//         {openIndex === index && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="overflow-hidden border-t border-filmbox-border/40"
//           >
//             <div className="p-6 space-y-6">

//               {brand.series.map((series) => (
//                 <div key={series.name}>

//                   <h4 className="font-semibold text-filmbox-text-primary mb-3">
//                     {series.name}
//                   </h4>

//                   <div className="flex flex-wrap gap-2">
//                     {series.stocks.map((stock) => (
//                       <span
//                         key={stock}
//                         className="px-3 py-1 rounded-full bg-filmbox-blue/10 text-filmbox-blue text-sm"
//                       >
//                         {stock}
//                       </span>
//                     ))}
//                   </div>

//                 </div>
//               ))}

//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </motion.div>
//   ))}
// </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const filmStocks = [
  {
    brand: 'Kodak',
    description:
      'Industry-standard cinema film stocks with rich color reproduction, strong skin tones, and wide latitude.',
    series: [
      {
        name: 'Vision3',
        stocks: ['500T (5219)', '250D (5207)', '200T (5213)', '50D (5203)']
      },
      {
        name: 'Vision2',
        stocks: [
          '500T (5218 / 5260)',
          '200T (5217)',
          '100T (5212)',
          '50D (5201)',
          '250D (5222 / 5225)'
        ]
      },
      {
        name: 'Vision1',
        stocks: ['200T', '500T']
      },
      {
        name: 'Legacy',
        stocks: [
          '5274 (200T)',
          '5246 (250D)',
          '5279 (500T)',
          '5277 (320T)',
          '5284 (500T)',
          '5289 (800T)',
          '5263 (500T)'
        ]
      },
      {
        name: 'Special',
        stocks: ['5620 Primetime (640T)']
      }
    ]
  },
  {
    brand: 'Fujifilm',
    description:
      'Film stocks known for softer contrast, pastel tones, and smooth highlight rolloff.',
    series: [
      {
        name: 'Eterna',
        stocks: [
          '500T (8573)',
          '400T (8583 / 8593)',
          '250D (8563)',
          '250T (8553)'
        ]
      },
      {
        name: 'Eterna Vivid',
        stocks: ['160T (8543)', '500T (8547)']
      },
      {
        name: 'Reala',
        stocks: ['500D (8592)']
      },
      {
        name: 'Super F-Series',
        stocks: ['500T (8572)', '125T (8532)']
      },
      {
        name: 'Color A',
        stocks: ['250T (8518)']
      }
    ]
  },
  {
    brand: 'Eastman',
    description:
      'Classic and vintage film stocks with punchy contrast and strong grain structure.',
    series: [
      {
        name: 'EXR',
        stocks: [
          '5298 (500T)',
          '5287 (200T)',
          '5293 (250T)',
          '5296 (500T)',
          '5248 (100T)',
          '5245 (50D)'
        ]
      },
      {
        name: 'ECN-II',
        stocks: [
          '5297 (250D)',
          '5294 (400T)',
          '5247 (125T / 100T)',
          '5293 (250T)'
        ]
      },
      {
        name: 'ECN-1',
        stocks: [
          '5254 (100T)',
          '5251 (50T)',
          '5250 (50D)',
          '5248 (25T)',
          '5247 (16D)'
        ]
      }
    ]
  },
  {
    brand: 'Print Film Stocks',
    description:
      'Photochemical print stocks defining final cinematic projection contrast and density.',
    series: [
      {
        name: 'Kodak',
        stocks: ['2383', '2393 (Premier)', '2395 (Teleprint)']
      },
      {
        name: 'Eastman',
        stocks: [
          '5381',
          '5382',
          '5384',
          '5385 (LC)',
          '5386 (EXR)'
        ]
      },
      {
        name: 'Fujifilm',
        stocks: ['3513', '3513D', '3523XD']
      }
    ]
  },
  {
    brand: 'Digital Intermediate',
    description:
      'Digital output transforms replacing traditional print film pipelines.',
    series: [
      {
        name: 'Color Spaces',
        stocks: [
          'Rec.709 (Gamma 2.4)',
          'sRGB (Gamma 2.2)',
          'Display P3',
          'P3-D60',
          'P3-DCI',
          'DCI XYZ',
          'Rec.2100 PQ',
          'Rec.2100 HLG',
          'Dolby Vision PQ'
        ]
      }
    ]
  }
];

export function StockAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Film Stock Library
          </h2>
          <p className="text-lg text-zinc-400">
            Meticulously crafted profiles from real film measurements
          </p>
        </motion.div>

        <div className="space-y-4">
          {filmStocks.map((brand, index) => (
            <motion.div
              key={brand.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-900 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {brand.brand}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    {brand.description}
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-zinc-800"
                  >
                    <div className="p-6 space-y-6">
                      {brand.series.map((series) => (
                        <div key={series.name}>
                          <h4 className="font-semibold text-white mb-3">
                            {series.name}
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {series.stocks.map((stock) => (
                              <span
                                key={stock}
                                className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/20 hover:bg-white/20 transition-colors"
                              >
                                {stock}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}