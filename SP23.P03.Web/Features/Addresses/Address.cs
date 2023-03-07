using SP23.P03.Web.Features.Authorization;

namespace SP23.P03.Web.Features.Addresses
{
    public class Address
    {
        public int Id { get; set; }
        public string Street { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string ZipCode { get; set; } = string.Empty;
        public int? ManagerId { get; set; } //Id for the Manager for the Address
        public virtual User? Manager { get; set; }
    }
}
