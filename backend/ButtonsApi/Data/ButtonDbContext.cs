using ButtonsApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ButtonsApi.Data
{
    public class ButtonDbContext :DbContext
    {
        public ButtonDbContext(DbContextOptions<ButtonDbContext> options) :base(options)
        {
            
        }
        public DbSet<Button> Buttons { get; set; }
    }
}
