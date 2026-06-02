export function Banner() {
   return (
      <section className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-background via-background to-accent/20 pt-20 md:pt-24">
         <div className="absolute inset-0 opacity-[0.02]">
            <div
               className="h-full w-full"
               style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M85,45 C85,45 80,45 80,40 C80,35 85,30 90,30 C95,30 100,35 100,40 C100,45 95,50 95,50 L95,85 C95,90 90,95 85,95 L50,95 C50,95 50,90 55,90 C60,90 65,85 65,80 C65,75 60,70 55,70 C50,70 45,75 45,80 C45,85 50,90 50,90 L15,90 C10,90 5,85 5,80 L5,50 C5,50 10,50 10,55 C10,60 15,65 20,65 C25,65 30,60 30,55 C30,50 25,45 20,45 C15,45 10,50 10,50 L10,15 C10,10 15,5 20,5 L55,5 C55,5 55,10 50,10 C45,10 40,15 40,20 C40,25 45,30 50,30 C55,30 60,25 60,20 C60,15 55,10 55,10 L85,10 C90,10 95,15 95,20 L95,45 Z' fill='%23004AAD'/%3E%3C/svg%3E")`,
                  backgroundSize: "80px 80px",
               }}
            />
         </div>
      </section>
   )
}
