type Params = {
  params: {
    slug: string;
  };
};

// Hàm để tạo metadata cho trang
export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

// Hàm này sẽ cung cấp các slug cho các trang động
export async function generateStaticParams() {
  // Danh sách slug của các bài viết. Bạn có thể lấy slug từ cơ sở dữ liệu hoặc API.
  const slugs = ['post-1', 'post-2', 'post-3']; // Thay thế với slug thực tế của bạn

  // Tạo mảng các đối tượng với slug
  return slugs.map(slug => ({
    slug,
  }));
}

// Component hiển thị nội dung của trang
export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>QuangTD22</p>
    </>
  );
}