using ButtonsApi.Data;
using ButtonsApi.Models;
using ButtonsApi.Data.Repository.IRepository;

namespace ButtonsApi.Data.Repository
{
    public class ButtonRepository : Repository<Button>, IButtonRepository
    {
        private readonly ButtonDbContext _db;
        public ButtonRepository(ButtonDbContext db) :base(db)
        {
            _db = db;
        }
        public async Task<Button> Update(Button entity)
        {
            _db.Buttons.Update(entity);
            await Save();
            return entity;
        }
    }
}
