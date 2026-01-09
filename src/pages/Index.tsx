import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a
          href="https://wa.me/79005016669"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 animate-fade-in"
          aria-label="WhatsApp"
        >
          <Icon name="MessageCircle" size={28} />
        </a>
        <a
          href="tel:+79005016669"
          className="bg-primary hover:bg-primary/90 text-primary-foreground w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 animate-fade-in"
          aria-label="Позвонить"
        >
          <Icon name="Phone" size={28} />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-background pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Демонтажные работы
                <span className="block text-primary mt-2">любой сложности</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная разборка конструкций и вывоз строительного мусора. Опытная команда, современное оборудование, соблюдение сроков.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>
                  Оставить заявку
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/afc9965f-c451-4149-a1bd-5dc75f906f32/files/ec45093e-0973-4298-a090-cb9e82d60b77.jpg"
                alt="Демонтажные работы"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выполняем полный спектр демонтажных работ с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-scale border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Hammer" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Разборка конструкций</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Демонтаж стен, перегородок, перекрытий</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Снос бетонных и кирпичных конструкций</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Разборка деревянных строений</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Демонтаж металлоконструкций</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Вывоз строительного мусора</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Погрузка и вывоз строительных отходов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Утилизация бетона, кирпича, дерева</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Вывоз крупногабаритного мусора</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Уборка территории после демонтажа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Стоимость работ рассчитывается индивидуально после осмотра объекта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4">
                  <Icon name="Building" size={48} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Демонтаж стен</h3>
                <p className="text-muted-foreground mb-6">Кирпич, бетон, пеноблок</p>
                <div className="text-3xl font-bold text-primary mb-2">
                  от 800 ₽
                </div>
                <p className="text-sm text-muted-foreground">за м²</p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-primary shadow-lg scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  Популярно
                </div>
                <div className="text-primary mb-4">
                  <Icon name="Home" size={48} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Комплексный демонтаж</h3>
                <p className="text-muted-foreground mb-6">Работы + вывоз мусора</p>
                <div className="text-3xl font-bold text-primary mb-2">
                  от 1 500 ₽
                </div>
                <p className="text-sm text-muted-foreground">за м²</p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4">
                  <Icon name="Trash2" size={48} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Вывоз мусора</h3>
                <p className="text-muted-foreground mb-6">Погрузка и утилизация</p>
                <div className="text-3xl font-bold text-primary mb-2">
                  от 5 000 ₽
                </div>
                <p className="text-sm text-muted-foreground">за рейс</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              💡 Точную стоимость рассчитаем после бесплатного выезда на объект
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрые сроки</h3>
              <p className="text-muted-foreground">Выполняем работы в согласованные сроки</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-muted-foreground">Соблюдаем технику безопасности</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опытная бригада</h3>
              <p className="text-muted-foreground">Профессионалы с опытом от 5 лет</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Свое оборудование</h3>
              <p className="text-muted-foreground">Профессиональный инструмент</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Оставьте заявку</h2>
              <p className="text-xl text-muted-foreground">
                Мы свяжемся с вами в течение 15 минут и ответим на все вопросы
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input
                        placeholder="Иван Петров"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Описание задачи</label>
                      <Textarea
                        placeholder="Расскажите, какие работы нужно выполнить..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                      <Icon name="Send" className="ml-2" size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="hover-scale">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <a href="tel:+79991234567" className="text-primary hover:underline text-lg">
                        +7 (999) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 20:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-scale">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@demolition.ru" className="text-primary hover:underline text-lg">
                        info@demolition.ru
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-scale">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        Москва и Московская область
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Выезд на объект бесплатно</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Демонтажные работы. Профессиональные услуги разнорабочих.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;