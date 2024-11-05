'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Beer, GlassWater, Coffee, Wine, Droplet } from "lucide-react";
import WellFoodLayout from "../../layout/WellFoodLayout";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('birre');

  const MenuSection = ({ title, children }) => (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4 text-[#1877F2] border-b border-amber-200 pb-2">
        {title}
      </h3>
      {children}
    </div>
  );

  const DrinkItem = ({ name, description, price, specs }) => (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold text-lg text-[#1877F2]">{name}</h4>
            {description && (
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            )}
            {specs && (
              <ul className="text-gray-500 text-sm mt-2">
                {specs.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold text-[#1877F2]">{price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <WellFoodLayout bgBlack={true} footer={true}>
      <div className="max-w-6xl mx-auto px-4 py-8 pt-40 pb-40">
      <Tabs defaultValue="birre" className="w-full">
  <TabsList className="TabsList flex flex-wrap justify-center gap-2 mb-8 p-2 rounded-lg">
    <TabsTrigger value="birre" data-value="birre" className="TabsTrigger flex items-center gap-2 px-3 py-2">
      <Beer className="h-4 w-4" />
      Birre
    </TabsTrigger>
    <TabsTrigger value="vini" data-value="vini" className="TabsTrigger flex items-center gap-2 px-3 py-2">
      <Wine className="h-4 w-4" />
      Vini
    </TabsTrigger>
    <TabsTrigger value="cocktails" data-value="cocktails" className="TabsTrigger flex items-center gap-2 px-3 py-2">
      <GlassWater className="h-4 w-4" />
      Cocktails
    </TabsTrigger>
    <TabsTrigger value="distillati" data-value="distillati" className="TabsTrigger flex items-center gap-2 px-3 py-2">
      <Droplet className="h-4 w-4" />
      Distillati
    </TabsTrigger>
    <TabsTrigger value="altro" data-value="altro" className="TabsTrigger flex items-center gap-2 px-3 py-2">
      <Coffee className="h-4 w-4" />
      Caffetteria & Soft
    </TabsTrigger>
  </TabsList>

          <TabsContent value="birre">
            <MenuSection title="Birre alla Spina">
              <DrinkItem
                name="HB Original"
                description="Bionda tedesca - La prima vera di Monaco"
                specs={[
                  "Alcol 5,1% Vol.",
                  "Corposa, leggermente maltata con finale elegante",
                  "Cl 30: €3,50 - Cl 50: €5,50"
                ]}
              />
              <DrinkItem
                name="HB Weisse"
                description="Bionda torbida tedesca - Stile Weisse"
                specs={[
                  "Alcol 5,1% Vol.",
                  "Fruttata, leggera con ottima bevibilità",
                  "Cl 30: €4,00 - Cl 50: €6,00"
                ]}
              />
              <DrinkItem
                name="HB Urbock"
                description="Ambrata tedesca - Stile Bock"
                specs={[
                  "Alcol 7,2% Vol.",
                  "Gusto deciso e aromatico",
                  "Cl 20: €4,00 - Cl 40: €6,00"
                ]}
              />
              <DrinkItem
                name="Complot IPA"
                description="Bionda torbida Belga - Stile IPA"
                specs={[
                  "Alcol 6,6% Vol.",
                  "Complessa e decisa, con note agrumate e fruttate",
                  "Cl 30: €4,00 - Cl 50: €6,00"
                ]}
              />
            </MenuSection>

            <MenuSection title="Birre Artigianali">
              <DrinkItem
                name="Ghosst"
                description="Belgian Strong Ale dal colore ambrato chiaro"
                specs={[
                  "33cl - €6,00",
                  "Realizzata con zucchero candito",
                  "Sentori fruttati e note dolci"
                ]}
              />
              <DrinkItem
                name="Swatch Blanche"
                description="Bianca leggera e versatile"
                specs={[
                  "33cl - €6,00",
                  "Malto d'orzo, frumento, avena, luppolo, spezie",
                  "Ideale con pesce e aperitivi leggeri"
                ]}
              />
            </MenuSection>
          </TabsContent>

          <TabsContent value="vini">
            <div className="grid md:grid-cols-2 gap-6">
              <MenuSection title="Vini Bianchi">
                <DrinkItem
                  name="Muller Thurgau"
                  specs={["Calice €5,00", "Bottiglia €16,00"]}
                />
                <DrinkItem
                  name="Chardonnay"
                  price="€20,00"
                />
                <DrinkItem
                  name="Falanghina del Sannio"
                  price="€20,00"
                />
              </MenuSection>

              <MenuSection title="Vini Rossi">
                <DrinkItem
                  name="Bonarda"
                  specs={["Calice €5,00", "Bottiglia €16,00"]}
                />
                <DrinkItem
                  name="Nero D'Avola"
                  specs={["Calice €5,00", "Bottiglia €16,00"]}
                />
              </MenuSection>

              <MenuSection title="Bollicine">
                <DrinkItem
                  name="Prosecco brut"
                  specs={["Calice €5,00", "Bottiglia €20,00"]}
                />
                <DrinkItem
                  name="Ferrari brut"
                  price="€35,00"
                />
                <DrinkItem
                  name="Champagne"
                  price="€70,00"
                />
              </MenuSection>
            </div>
          </TabsContent>

          <TabsContent value="cocktails">
            <MenuSection title="Cocktail Classici €6,00">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DrinkItem
                  name="Aperol Spritz"
                  description="aperol, spumante, soda"
                />
                <DrinkItem
                  name="Moscow Mule"
                  description="vodka, ginger beer, succo di lime"
                />
                <DrinkItem
                  name="Mojito"
                  description="rum chiaro, menta fresca, succo di limone, zucchero di canna, soda"
                />
                <DrinkItem
                  name="Negroni"
                  description="bitter campari, vermut rosso, gin"
                />
                <DrinkItem
                  name="Long Island"
                  description="tequila, vodka, cointreau, gin, rum chiaro, sweet sour, cola"
                />
              </div>
            </MenuSection>

            <MenuSection title="Virgin Cocktail €5,00">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DrinkItem
                  name="Virgin Mojito"
                  description="lime, menta, zucchero di canna, lemon soda"
                />
                <DrinkItem
                  name="Virgin Colada"
                  description="succo d'ananas, cocco, panna"
                />
              </div>
            </MenuSection>
          </TabsContent>

          <TabsContent value="distillati">
            <div className="grid md:grid-cols-2 gap-6">
              <MenuSection title="Gin & Tonic">
                <DrinkItem name="Star of Bombay" price="€10,00" />
                <DrinkItem name="Hendrick's" price="€10,00" />
                <DrinkItem name="Monkey 47" price="€12,00" />
              </MenuSection>

              <MenuSection title="Whisky">
                <DrinkItem name="Talisker Storm" price="€7,00" />
                <DrinkItem name="Oban 14" price="€8,00" />
                <DrinkItem name="Ardbeg Ten" price="€8,00" />
              </MenuSection>
            </div>
          </TabsContent>

          <TabsContent value="altro">
            <div className="grid md:grid-cols-2 gap-6">
              <MenuSection title="Caffetteria">
                <DrinkItem name="Caffè espresso" price="€1,50" />
                <DrinkItem name="Cappuccino" price="€2,50" />
                <DrinkItem name="Caffè shakerato" price="€3,50" />
              </MenuSection>

              <MenuSection title="Soft Drinks">
                <DrinkItem name="Pepsi cola" price="€3,50" />
                <DrinkItem name="Red Bull" price="€4,00" />
                <DrinkItem name="Acqua ½ litro" price="€1,50" />
              </MenuSection>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </WellFoodLayout>
  );
};

export default Menu;
