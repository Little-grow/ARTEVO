using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.Carts
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
           //- Adding an item to a cart
          //- Removing an item from a cart (`DELETE /carts/{collectorId}/items/{portfolioId}`)
         //- Getting all items in a cart (`GET /carts/{collectorId}/items`)
        //- Clearing a cart (`DELETE /carts/{collectorId}/items`)
    
    }
}
