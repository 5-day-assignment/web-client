# coding: utf-8

"""
    User Management API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.update_user import UpdateUser

class TestUpdateUser(unittest.TestCase):
    """UpdateUser unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> UpdateUser:
        """Test UpdateUser
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `UpdateUser`
        """
        model = UpdateUser()
        if include_optional:
            return UpdateUser(
                id = '',
                username = '',
                given_name = '',
                family_name = '',
                address = '',
                password = ''
            )
        else:
            return UpdateUser(
        )
        """

    def testUpdateUser(self):
        """Test UpdateUser"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
