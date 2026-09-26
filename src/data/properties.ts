export type PropertyType = 'Villa' | 'Penthouse' | 'Apartment' | 'Duplex';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  priceLabel: string;
  location: string;
  area: string;
  district: string;
  city: string;
  beds: number;
  baths: number;
  sqm: number;
  images: string[];
  description: string;
  shortDescription: string;
  amenities: string[];
  featured: boolean;
  year: number;
}

export const properties: Property[] = [
  {
    id: 'galaxy-home-pinnacle',
    title: 'Galaxy Home — The Pinnacle Estate',
    type: 'Villa',
    price: 150000000000,
    priceLabel: '150 tỷ',
    location: 'Aether Ridge, Vịnh Lan Hạ — Đỉnh Vô Cực',
    area: 'Aether Peak',
    district: 'Khu biệt lập',
    city: 'Hải Phòng / Quảng Ninh',
    beds: 6,
    baths: 8,
    sqm: 1450,
    images: [
      '/galaxy-home-bg.jpg',
      '/hero-bg.jpg',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    ],
    description: 'Tuyệt tác kiến trúc Galaxy Home tọa lạc trên đỉnh nhọn kỳ vĩ vươn trên biển mây hoàng hôn. Được thiết kế đa tầng với kính Low-E tràn viền 360 độ, hệ thống thang đá xuyên lòng núi thắp sáng bằng đèn ấm nghệ thuật, đài thiên văn riêng biệt ngắm dải ngân hà và sân thượng ngắm trọn tầng mây Aether. Đây là biểu tượng xa hoa tột bậc đại diện cho triết lý sống đỉnh cao của Sky Estate.',
    shortDescription: 'Dinh thự độc bản trên đỉnh non ngàn vươn trên biển mây hoàng hôn với kiến trúc kính đa tầng mở trọn bầu trời ngân hà.',
    amenities: ['Kiến trúc đỉnh núi độc bản', 'Kính tràn viền 360°', 'Đài thiên văn riêng', 'Hồ bơi vô cực trên mây', 'Đường bậc thang đá thắp sáng', 'Bãi đỗ trực thăng riêng', 'Hệ thống Smart Home AI'],
    featured: true,
    year: 2026,
  },
  {
    id: 'villa-aurora-thao-dien',
    title: 'Villa Aurora — Thảo Điền',
    type: 'Villa',
    price: 45000000000,
    priceLabel: '45 tỷ',
    location: 'Thảo Điền, Quận 2, TP. Hồ Chí Minh',
    area: 'Thảo Điền',
    district: 'Quận 2',
    city: 'TP. Hồ Chí Minh',
    beds: 5,
    baths: 6,
    sqm: 520,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    ],
    description: 'Villa Aurora tọa lạc tại trung tâm khu Thảo Điền — nơi được mệnh danh là "Beverly Hills của Sài Gòn". Thiết kế theo phong cách Contemporary Tropical, kết hợp không gian mở với vật liệu tự nhiên cao cấp. Hồ bơi vô cực nhìn ra vườn nhiệt đới riêng tư, phòng rượu ngầm dưới tầng hầm, và hệ thống smart home Lutron toàn diện. Mỗi chi tiết đều được chăm chút bởi kiến trúc sư từ Foster + Partners.',
    shortDescription: 'Biệt thự phong cách Contemporary Tropical giữa lòng Thảo Điền với hồ bơi vô cực và vườn nhiệt đới riêng tư.',
    amenities: ['Hồ bơi vô cực', 'Phòng rượu', 'Smart Home', 'Sân vườn nhiệt đới', 'Garage 3 xe', 'Phòng gym riêng'],
    featured: true,
    year: 2024,
  },
  {
    id: 'penthouse-skyline-landmark81',
    title: 'Penthouse Skyline — Landmark 81',
    type: 'Penthouse',
    price: 85000000000,
    priceLabel: '85 tỷ',
    location: 'Landmark 81, Bình Thạnh, TP. Hồ Chí Minh',
    area: 'Vinhomes Central Park',
    district: 'Bình Thạnh',
    city: 'TP. Hồ Chí Minh',
    beds: 4,
    baths: 5,
    sqm: 450,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    ],
    description: 'Penthouse Skyline chiếm trọn tầng 75-76 của tòa nhà biểu tượng Landmark 81 — tòa nhà cao nhất Đông Nam Á. Tầm nhìn 360° bao quát toàn bộ thành phố, từ sông Sài Gòn uốn lượn đến đường chân trời lung linh. Nội thất do Armani Casa thiết kế độc quyền, sàn đá marble Calacatta nhập khẩu từ Ý, và ban công kính cường lực mang đến trải nghiệm "chạm vào mây" đích thực.',
    shortDescription: 'Penthouse duplex tầng 75-76 Landmark 81, tầm nhìn 360° toàn thành phố, nội thất Armani Casa.',
    amenities: ['Tầm nhìn 360°', 'Nội thất Armani Casa', 'Thang máy riêng', 'Ban công panorama', 'Phòng chiếu phim', 'Butler service'],
    featured: true,
    year: 2023,
  },
  {
    id: 'apartment-the-marq-d1',
    title: 'The Marq Residence — Quận 1',
    type: 'Apartment',
    price: 28000000000,
    priceLabel: '28 tỷ',
    location: 'The Marq, Quận 1, TP. Hồ Chí Minh',
    area: 'Quận 1',
    district: 'Quận 1',
    city: 'TP. Hồ Chí Minh',
    beds: 3,
    baths: 3,
    sqm: 180,
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80',
    ],
    description: 'Căn hộ The Marq nằm tại vị trí vàng Quận 1, chỉ vài bước chân đến Nhà hát Thành phố và phố đi bộ Nguyễn Huệ. Thiết kế bởi Foster + Partners với triết lý "less is more", mỗi căn hộ là một tác phẩm nghệ thuật tối giản. Trần cao 3.5m, cửa kính floor-to-ceiling, và layout mở tối đa hóa ánh sáng tự nhiên và luồng gió.',
    shortDescription: 'Căn hộ cao cấp thiết kế bởi Foster + Partners, trần cao 3.5m, vị trí vàng Quận 1.',
    amenities: ['Trần cao 3.5m', 'Cửa kính floor-to-ceiling', 'Hồ bơi tầng thượng', 'Gym & Spa', 'Concierge 24/7', 'Bãi đỗ xe ngầm'],
    featured: true,
    year: 2024,
  },
  {
    id: 'villa-emerald-an-phu',
    title: 'Villa Emerald — An Phú',
    type: 'Villa',
    price: 38000000000,
    priceLabel: '38 tỷ',
    location: 'An Phú, Quận 2, TP. Hồ Chí Minh',
    area: 'An Phú',
    district: 'Quận 2',
    city: 'TP. Hồ Chí Minh',
    beds: 4,
    baths: 5,
    sqm: 400,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    ],
    description: 'Villa Emerald là biệt thự phong cách Indochine hiện đại, lấy cảm hứng từ kiến trúc thuộc địa Pháp kết hợp nét Á Đông tinh tế. Khu vườn xanh mát bao quanh với hệ thống tưới tự động, hồ cá Koi Nhật Bản, và sân golf mini. Phòng khách double-height với đèn chùm Murano, bếp mở theo phong cách Michelin-star với đảo bếp đá Granite Black Galaxy.',
    shortDescription: 'Biệt thự phong cách Indochine hiện đại tại An Phú, vườn nhiệt đới và hồ cá Koi.',
    amenities: ['Vườn Indochine', 'Hồ cá Koi', 'Sân golf mini', 'Đèn chùm Murano', 'Bếp đảo Granite', 'Phòng trà Nhật'],
    featured: true,
    year: 2023,
  },
  {
    id: 'duplex-riviera-point',
    title: 'Duplex Riviera Point — Quận 7',
    type: 'Duplex',
    price: 18500000000,
    priceLabel: '18.5 tỷ',
    location: 'Riviera Point, Quận 7, TP. Hồ Chí Minh',
    area: 'Phú Mỹ Hưng',
    district: 'Quận 7',
    city: 'TP. Hồ Chí Minh',
    beds: 3,
    baths: 4,
    sqm: 220,
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    ],
    description: 'Duplex Riviera Point mang đến trải nghiệm sống hai tầng độc đáo bên bờ sông Sài Gòn. Tầng dưới là không gian sinh hoạt mở với phòng khách nối liền ban công hướng sông. Tầng trên là khu vực riêng tư với master bedroom có walk-in closet và phòng tắm jacuzzi. Khu compound an ninh 24/7 với tiện ích trường quốc tế, bệnh viện và trung tâm thương mại trong bán kính 500m.',
    shortDescription: 'Duplex ven sông tại Riviera Point, không gian hai tầng với tầm nhìn sông Sài Gòn.',
    amenities: ['View sông Sài Gòn', 'Walk-in closet', 'Jacuzzi', 'An ninh 24/7', 'Gần trường quốc tế', 'Công viên ven sông'],
    featured: false,
    year: 2024,
  },
  {
    id: 'penthouse-serenity-sky',
    title: 'Penthouse Serenity Sky — Quận 3',
    type: 'Penthouse',
    price: 55000000000,
    priceLabel: '55 tỷ',
    location: 'Serenity Sky Villas, Quận 3, TP. Hồ Chí Minh',
    area: 'Quận 3',
    district: 'Quận 3',
    city: 'TP. Hồ Chí Minh',
    beds: 4,
    baths: 5,
    sqm: 350,
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80',
    ],
    description: 'Serenity Sky Villas là dự án "villa trên không" đầu tiên tại Việt Nam, và Penthouse Serenity là viên ngọc sáng nhất của dự án. Mỗi tầng chỉ có 2 căn, đảm bảo sự riêng tư tuyệt đối. Sân thượng riêng 100m² với hồ bơi, vườn treo và không gian BBQ. Từ đây, bạn có thể ngắm toàn cảnh trung tâm thành phố trong khi thưởng thức bữa tối dưới ánh sao.',
    shortDescription: 'Villa trên không tại Serenity Sky Villas, sân thượng riêng 100m² với hồ bơi và vườn treo.',
    amenities: ['Hồ bơi riêng', 'Sân thượng 100m²', 'Vườn treo', 'Khu BBQ', 'Thang máy riêng', 'Wine cellar'],
    featured: false,
    year: 2022,
  },
  {
    id: 'apartment-empire-city',
    title: 'Empire City Lumi — Thủ Thiêm',
    type: 'Apartment',
    price: 15000000000,
    priceLabel: '15 tỷ',
    location: 'Empire City, Thủ Thiêm, TP. Hồ Chí Minh',
    area: 'Thủ Thiêm',
    district: 'Quận 2',
    city: 'TP. Hồ Chí Minh',
    beds: 2,
    baths: 2,
    sqm: 120,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    ],
    description: 'Empire City Lumi là căn hộ thông minh thế hệ mới tại khu đô thị Thủ Thiêm. Thiết kế tối giản Scandinavian với tông màu trung tính ấm áp. Hệ thống IoT tích hợp cho phép điều khiển toàn bộ thiết bị qua smartphone. Vị trí chiến lược ngay trung tâm Thủ Thiêm với tầm nhìn hướng về Quận 1 và sông Sài Gòn, chỉ 5 phút đến trung tâm thành phố qua cầu Thủ Thiêm.',
    shortDescription: 'Căn hộ thông minh IoT tại Empire City, tầm nhìn sông Sài Gòn và Quận 1.',
    amenities: ['Smart IoT', 'View Quận 1 & sông', 'Sky garden', 'Infinity pool', 'Co-working space', 'Pet-friendly'],
    featured: false,
    year: 2025,
  },
  {
    id: 'villa-coastal-ho-tram',
    title: 'Villa Coastal — Hồ Tràm',
    type: 'Villa',
    price: 32000000000,
    priceLabel: '32 tỷ',
    location: 'Hồ Tràm Strip, Bà Rịa - Vũng Tàu',
    area: 'Hồ Tràm',
    district: 'Xuyên Mộc',
    city: 'Bà Rịa - Vũng Tàu',
    beds: 5,
    baths: 6,
    sqm: 480,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    ],
    description: 'Villa Coastal tọa lạc tại Hồ Tràm Strip — thiên đường nghỉ dưỡng cách TP.HCM chỉ 2 giờ lái xe. Thiết kế Resort-style với mái lá nhiệt đới, tường kính panorama hướng biển. Hồ bơi tràn bờ nối liền với bãi biển riêng 50m. Đây không chỉ là nơi nghỉ dưỡng mà còn là tài sản đầu tư sinh lời qua chương trình cho thuê của The Grand Ho Tram.',
    shortDescription: 'Biệt thự biển phong cách Resort tại Hồ Tràm Strip, bãi biển riêng và hồ bơi tràn bờ.',
    amenities: ['Bãi biển riêng', 'Hồ bơi tràn bờ', 'Mái lá nhiệt đới', 'Phòng spa', 'Sân tennis', 'Cho thuê sinh lời'],
    featured: false,
    year: 2024,
  },
  {
    id: 'apartment-metropole-thu-thiem',
    title: 'The Metropole Thủ Thiêm',
    type: 'Apartment',
    price: 22000000000,
    priceLabel: '22 tỷ',
    location: 'The Metropole, Thủ Thiêm, TP. Hồ Chí Minh',
    area: 'Thủ Thiêm',
    district: 'Quận 2',
    city: 'TP. Hồ Chí Minh',
    beds: 3,
    baths: 3,
    sqm: 160,
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    ],
    description: 'The Metropole Thủ Thiêm là dự án đẳng cấp nhất của SonKim Land, được phát triển cùng Keppel Land Singapore. Căn hộ 3 phòng ngủ với layout thông minh, tối ưu hóa mọi mét vuông. Nội thất bàn giao cao cấp từ thương hiệu Hansgrohe, Kohler và Bosch. Khu compound khép kín với công viên nội khu 1.3 hecta, hồ bơi Olympic và sân chơi trẻ em an toàn.',
    shortDescription: 'Căn hộ cao cấp The Metropole, nội thất Hansgrohe & Bosch, công viên nội khu 1.3ha.',
    amenities: ['Nội thất Hansgrohe', 'Công viên 1.3ha', 'Hồ bơi Olympic', 'Sân chơi trẻ em', 'Clubhouse', 'Shuttle bus'],
    featured: false,
    year: 2024,
  },
  {
    id: 'penthouse-diamond-island',
    title: 'Penthouse Diamond Island',
    type: 'Penthouse',
    price: 42000000000,
    priceLabel: '42 tỷ',
    location: 'Diamond Island, Quận 2, TP. Hồ Chí Minh',
    area: 'Đảo Kim Cương',
    district: 'Quận 2',
    city: 'TP. Hồ Chí Minh',
    beds: 4,
    baths: 4,
    sqm: 300,
    images: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    description: 'Penthouse Diamond Island tọa lạc trên đảo nhân tạo giữa lòng sông Sài Gòn, mang đến trải nghiệm sống như khu nghỉ dưỡng 5 sao ngay trong thành phố. Thiết kế open-plan với tường kính từ sàn đến trần, tầm nhìn 270° ra sông và thành phố. Marina riêng cho du thuyền, bến canoe và kayak. Đây là lựa chọn hoàn hảo cho những ai yêu thích phong cách sống riverside luxury.',
    shortDescription: 'Penthouse trên đảo nhân tạo Diamond Island, tầm nhìn 270° sông Sài Gòn, marina riêng.',
    amenities: ['Marina du thuyền', 'View 270° sông', 'Kính sàn-trần', 'Canoe & Kayak', 'BBQ terrace', 'Phòng xông hơi'],
    featured: false,
    year: 2023,
  },
  {
    id: 'duplex-lumiere-riverside',
    title: 'Duplex Lumière Riverside',
    type: 'Duplex',
    price: 25000000000,
    priceLabel: '25 tỷ',
    location: 'Lumière Riverside, Quận 2, TP. Hồ Chí Minh',
    area: 'An Phú',
    district: 'Quận 2',
    city: 'TP. Hồ Chí Minh',
    beds: 4,
    baths: 4,
    sqm: 250,
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    ],
    description: 'Lumière Riverside — tên gọi lấy cảm hứng từ ánh sáng (Lumière) — mang triết lý thiết kế tối đa hóa ánh sáng tự nhiên. Duplex 2 tầng với cầu thang xoắn ốc bằng gỗ walnut nhập khẩu. Tầng dưới là không gian mở liên hoàn giữa phòng khách, bếp và sân vườn ban công. Tầng trên là 3 phòng ngủ, mỗi phòng đều có phòng tắm riêng và ban công nhỏ hướng sông.',
    shortDescription: 'Duplex ánh sáng tự nhiên tại Lumière Riverside, cầu thang walnut và sân vườn ban công.',
    amenities: ['Cầu thang walnut', 'Sân vườn ban công', 'View sông', 'Phòng tắm riêng', 'Bếp mở', 'Gym & Yoga studio'],
    featured: false,
    year: 2025,
  },
  {
    id: 'villa-dalat-highlands',
    title: 'Villa Highland — Đà Lạt',
    type: 'Villa',
    price: 28000000000,
    priceLabel: '28 tỷ',
    location: 'Khu biệt thự Lâm Viên, Đà Lạt, Lâm Đồng',
    area: 'Đà Lạt',
    district: 'TP. Đà Lạt',
    city: 'Lâm Đồng',
    beds: 6,
    baths: 7,
    sqm: 600,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
    description: 'Villa Highland là biệt thự nghỉ dưỡng phong cách Châu Âu giữa lòng Đà Lạt. Tọa lạc trên đồi thông với độ cao 1.500m, quanh năm mát mẻ với nhiệt độ 18-25°C. Lò sưởi đá granite trong phòng khách, thư viện gỗ sồi, và ban công nhìn ra thung lũng sương mù. Sân vườn rộng 200m² trồng hoa hồng Đà Lạt và cây cảnh bonsai. Nơi đây là thiên đường yên bình để tái tạo năng lượng.',
    shortDescription: 'Biệt thự Châu Âu giữa đồi thông Đà Lạt, lò sưởi đá granite và vườn hồng 200m².',
    amenities: ['Lò sưởi đá granite', 'Thư viện gỗ sồi', 'Vườn hồng', 'View thung lũng', 'Phòng trà', 'Sân BBQ ngoài trời'],
    featured: false,
    year: 2023,
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'nguyen-minh-khoa',
    name: 'Nguyễn Minh Khoa',
    role: 'Founder & CEO',
    description: 'Hơn 20 năm kinh nghiệm trong lĩnh vực bất động sản cao cấp. Từng là Giám đốc phát triển tại CBRE Vietnam trước khi sáng lập Aether Lane.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 'tran-thu-ha',
    name: 'Trần Thu Hà',
    role: 'Chief Design Officer',
    description: 'Kiến trúc sư tốt nghiệp AA School London, chuyên thiết kế không gian sống cao cấp. Đam mê kết hợp kiến trúc phương Tây và nét Á Đông.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: 'le-hoang-nam',
    name: 'Lê Hoàng Nam',
    role: 'Head of Sales',
    description: 'Chuyên gia tư vấn bất động sản với mạng lưới khách hàng HNW tại Việt Nam và quốc tế. Từng phụ trách phân phối các dự án tỷ đô.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    id: 'pham-ngoc-anh',
    name: 'Phạm Ngọc Anh',
    role: 'Marketing Director',
    description: 'Chuyên gia marketing luxury với hơn 12 năm kinh nghiệm. Xây dựng chiến lược thương hiệu cho nhiều dự án bất động sản hàng đầu Việt Nam.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    id: 'vo-duc-thinh',
    name: 'Võ Đức Thịnh',
    role: 'Legal & Investment Advisor',
    description: 'Luật sư chuyên về bất động sản và đầu tư, tốt nghiệp Columbia Law School. Tư vấn pháp lý cho hàng trăm giao dịch trị giá nghìn tỷ.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Trương Gia Bình',
    role: 'Chủ tịch FPT Corporation',
    content: 'Aether Lane đã giúp tôi tìm được căn penthouse hoàn hảo tại Landmark 81. Đội ngũ chuyên nghiệp, am hiểu thị trường và luôn đặt lợi ích khách hàng lên hàng đầu. Mỗi bước trong quy trình đều được chăm sóc tỉ mỉ.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Nguyễn Thị Phương Thảo',
    role: 'CEO VietJet Air',
    content: 'Trải nghiệm tuyệt vời với Sky Estate. Không chỉ tìm được bất động sản ưng ý, tôi còn được tư vấn chiến lược đầu tư dài hạn. Đây thực sự là dịch vụ bất động sản cao cấp đúng nghĩa.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Phạm Nhật Vượng',
    role: 'Chủ tịch Vingroup',
    content: 'Sự tinh tế trong từng chi tiết, từ cách trình bày bất động sản đến quy trình pháp lý, khiến tôi hoàn toàn tin tưởng Aether Lane. Một thương hiệu xứng đáng với đẳng cấp bất động sản Việt Nam.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
    rating: 5,
  },
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'Aether Lane khác biệt gì so với các đơn vị môi giới bất động sản khác?',
    answer: 'Aether Lane không chỉ đơn thuần là môi giới — chúng tôi là đối tác chiến lược trong hành trình tìm kiếm không gian sống đẳng cấp. Với đội ngũ chuyên gia hơn 20 năm kinh nghiệm, chúng tôi cung cấp dịch vụ tư vấn toàn diện từ pháp lý, tài chính đến thiết kế nội thất, đảm bảo mỗi khách hàng đều nhận được trải nghiệm bespoke — được thiết kế riêng cho từng nhu cầu.',
  },
  {
    id: 'faq2',
    question: 'Quy trình mua bất động sản qua Aether Lane như thế nào?',
    answer: 'Quy trình gồm 5 bước: (1) Tư vấn ban đầu để hiểu nhu cầu và ngân sách; (2) Đề xuất danh sách bất động sản phù hợp; (3) Tổ chức xem nhà riêng với chuyên gia; (4) Hỗ trợ đàm phán và pháp lý; (5) Bàn giao và dịch vụ hậu mãi. Toàn bộ quy trình được theo dõi qua hệ thống CRM, đảm bảo minh bạch ở mọi giai đoạn.',
  },
  {
    id: 'faq3',
    question: 'Aether Lane có hỗ trợ khách hàng quốc tế không?',
    answer: 'Hoàn toàn có. Chúng tôi có đội ngũ tư vấn song ngữ (Việt-Anh) và đã phục vụ khách hàng từ hơn 15 quốc gia. Chúng tôi hỗ trợ toàn diện về visa đầu tư, quy định sở hữu bất động sản cho người nước ngoài tại Việt Nam, và kết nối với các đối tác ngân hàng quốc tế.',
  },
  {
    id: 'faq4',
    question: 'Chi phí dịch vụ của Aether Lane là bao nhiêu?',
    answer: 'Phí dịch vụ của chúng tôi nằm trong phạm vi tiêu chuẩn thị trường (2-3% giá trị giao dịch), được tính minh bạch và chỉ thanh toán khi giao dịch hoàn tất thành công. Đối với khách hàng VIP và giao dịch giá trị lớn, chúng tôi có chính sách ưu đãi riêng.',
  },
  {
    id: 'faq5',
    question: 'Tôi có thể đặt lịch xem nhà trực tiếp không?',
    answer: 'Chắc chắn rồi. Bạn có thể đặt lịch xem nhà ngay trên website qua nút "Đặt lịch xem nhà" ở mỗi bất động sản, hoặc liên hệ hotline 1900-AETHER (1900-238437) để được sắp xếp lịch xem nhà riêng với chuyên gia tư vấn chuyên trách.',
  },
  {
    id: 'faq6',
    question: 'Aether Lane có chương trình đầu tư bất động sản không?',
    answer: 'Có. Chúng tôi cung cấp dịch vụ tư vấn đầu tư bất động sản với phân tích ROI chi tiết, dự báo thị trường, và các gói quản lý cho thuê chuyên nghiệp. Đội ngũ Investment Advisory sẽ xây dựng portfolio bất động sản phù hợp với mục tiêu tài chính và khẩu vị rủi ro của bạn.',
  },
];
